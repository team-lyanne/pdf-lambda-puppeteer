import { Helper } from "./Helper";
import { GeneratorFunction } from "./types/GeneratorTypes";
import { waterDamageTemplate } from "./templates/joint_report_water_damage";
import mapReportFields from "./FieldMapper";

export class PDFGenerator {
  /**
   * This function returns the buffer for a generated PDF of manual
   * @param {any} event - The object that comes for lambda which includes the http's attributes
   * @returns {Array<any>} array of Structure Instructions
   */
  static buildReport: GeneratorFunction = async (event) => {
    try {
      // Body is encoded in base64...
      const decodedBody = atob(event.body)
      // ... and it looks like it's embedded twice in JSON by Make
      const body = JSON.parse(JSON.parse(decodedBody));
      // Make aggregates our object as an array. We only want the first item.
      // Also, we need to map quite a few fields for proper use in the template.
      const attributes = mapReportFields(body[0]);
      const html = waterDamageTemplate(attributes);
      const options = {
        path: process.argv[3],
        format: 'A4',
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        printBackground: true
      };

      const pdf = await Helper.getPDFBuffer(html, options);

      return {
        headers: {
          "Content-type": "application/pdf",
        },
        statusCode: 200,
        body: pdf.toString("base64"),
        isBase64Encoded: true,
      };
    } catch (error) {
      console.error("Error : ", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error,
          message: "Something went wrong",
        }),
      };
    }
  };
}

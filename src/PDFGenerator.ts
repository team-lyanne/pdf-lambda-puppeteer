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
      // It looks like Make is sending the body as an array of objects.
      // We only want the first one.
      // console.log(event.body);
      const body = JSON.parse(JSON.parse(event.body));
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

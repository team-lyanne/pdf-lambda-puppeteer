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
      // Stubbing values for now
      // event.reportFields = {
      //   building_type: "Immeuble en copropriété",
      //   date: "23/02/1990",
      //   address: "15 rue yves toudic",
      //   syndic_name: "Toto",
      //   syndic_address: "Mich 75010 Paris",
      //   recent_building: "NON",
      //   leakage_test: "OUI",
      //   origin_found: "OUI",
      //   repaired: "OUI",
      //   craftman_responsibility: "OUI",
      //   craftman_reason: "OUI",
      //   home_usage_a: "OUI",
      //   termination_a: "OUI",
      //   seasonal_furnished_a: "OUI",
      //   damage_a: "OUI",
      //   category_a: "Syndic",
      //   owner_occupant_a: "OUI",
      //   termination_b: "NON",
      //   seasonal_furnished_b: "NON",
      //   home_usage_b: "NON",
      //   damage_b: "NON",
      //   category_b: "Gérant de l'immeuble",
      //   owner_occupant_b: "NON",
      //   leakage_cause: "Fuite sur canalisation",
      //   pipe_owner: "Commune",
      //   pipe_role: "Alimentation",
      //   pipe_accessibility: "Accessible",
      //   infiltrations: "Façade, Fenêtre ou porte-fenêtre, Joint d'étanchéité (sanitaire ou carrelage)"
      // }
      const attributes = mapReportFields(event.body);
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

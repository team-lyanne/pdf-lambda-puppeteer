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
      // We need to map quite a few fields for proper use in the template.
      event = {
        "date": "06/05/2022",
        "address": "15 rue yves toudic  Paris 75010",
        "email_a": "loul3a@gmail.com",
        "email_b": "louis.sommer@gmail.com",
        "floor_a": "4e g",
        "floor_b": "2e gauche",
        "phone_a": "0649847460",
        "phone_b": "0649847460",
        "damage_a": "NON",
        "damage_b": "OUI",
        "repaired": "NON",
        "address_a": "1 rue Meynadier\n75019\nParis",
        "address_b": "15 rue Yves Toudic\nParis\n75010",
        "insurer_a": "CM",
        "insurer_b": "Luko",
        "pipe_role": "Evacuation",
        "building_a": "1",
        "building_b": "Bat A",
        "category_a": "Propriétaire / Copropriétaire",
        "category_b": "Locataire ou occupant non propriétaire",
        "pipe_owner": "Commune",
        "last_name_a": "Lecsei",
        "last_name_b": "Bob",
        "other_cause": null,
        "syndic_name": "Hello Syndic",
        "first_name_a": "Natacha",
        "first_name_b": "Billy",
        "home_usage_a": "NON",
        "home_usage_b": "OUI",
        "leakage_test": "OUI",
        "origin_found": "OUI",
        "broker_name_a": null,
        "broker_name_b": "Jojo Rabbit",
        "building_type": "Immeuble en copropriété",
        "craftman_name": "Acme",
        "infiltrations": "Façade, Fenêtre ou porte-fenêtre, Joint d'étanchéité (sanitaire ou carrelage)",
        "leakage_cause": "Fuite sur canalisation",
        "termination_a": "NON",
        "termination_b": "NON",
        "broker_phone_a": null,
        "broker_phone_b": "+33 6 12 34 56 78",
        "claim_number_a": "23J",
        "claim_number_b": "2389E",
        "responsibility": "M Sommer",
        "signature_city": "Paris",
        "signature_date": "05/04/2022",
        "syndic_address": "15 rue des Dames Paris 75017",
        "craftman_reason": "Pas fiable le mec",
        "landlord_name_a": "",
        "landlord_name_b": "Mister White",
        "leakage_company": "Acme",
        "leakage_payment": "Louis Sommer",
        "recent_building": "NON",
        "broker_address_a": "",
        "broker_address_b": "28 rue de la micho paris 75010",
        "craftman_address": "rue des mauvais garçons Paris 75004",
        "landlord_phone_a": null,
        "landlord_phone_b": "0123456789",
        "owner_occupant_a": "OUI",
        "owner_occupant_b": null,
        "contract_number_a": "23987EFJH",
        "contract_number_b": "293987FDEHU",
        "pipe_accessibility": "accessible",
        "craftman_responsibility": "OUI",
        "seasonal_furnished_rental_a": "NON",
        "seasonal_furnished_rental_b": "NON"
      }
      const attributes = mapReportFields(event);
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

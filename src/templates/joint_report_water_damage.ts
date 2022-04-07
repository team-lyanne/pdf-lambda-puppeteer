import * as handlebars from "handlebars";

const html: string = `
<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        .col-form-label {
          font-weight: bold;
          color: black;
          padding: 0px 8px;
        }

        .pdf-form {
          max-width: 1090px;
        }

        .col-6:first-of-type {
            padding-right: 24px;
        }
        input[type=text], input[type=email], input[type=tel], textarea {
          font-family:'Courier New', Courier, monospace;
          width: 100%;
        }
        input[type=checkbox] {
          height: 12px;
          width: 12px;
          margin-right: 4px;
        }
        input, label, p, textarea {
          font-size: 11px !important;
        }
        mark {
          border-radius: 50%;
          padding: 6px;
        }
        input, textarea {
          border: none;
          border-bottom: 1px solid #e7eaf3;
          box-shadow: none;
          border-radius: 0px;
          padding: 0px 4px !important;
          font-family:'Courier New', Courier, monospace;
          height: 20px;
          margin-right: 8px;
        }
        .form-group {
          margin-bottom: 4px;
        }
        .form-group.check_boxes {
          margin-bottom: 0px;
        }
        textarea {
          height: 40px;
          resize: none !important;
          line-height: initial;
          padding-top: 4px;
        }
        .small {
          font-size: 8px;
          color: rgba(1,1,1,0.6);
          line-height: 1;
        }
        .person-pdf {
          border-radius: 0 4px 0 4px;
          padding: 32px;
          position: relative;
        }
        .person-pdf .form-group {
          margin-bottom: 6px;
        }
        .person-pdf .form-group.row.check_boxes {
          margin-bottom: 0px;
        }
        .person-pdf h3 {
          position: absolute;
          top: -32px;
        }
        .person-pdf h5 {
          position: absolute;
          top: -24px;

        }
        h2 {
          font-size: 1.5rem;
          text-transform: uppercase;
        }
        .person-pdf.primary {
          border-radius: 4px 0px 0px 4px;
          background-color: #88B3FF;
        }
        .person-pdf.primary h3, h5 {
            left: 0px
        }
        .person-pdf.primary mark {
          background-color: #88B3FF;
          color: black;
          border-radius: 16px;
          padding: 2px 6px;
        }
        .person-pdf.success {
          background-color: #CEFFF6;
        }
        .person-pdf.success h3, h5 {
            right: 0px
        }
        .person-pdf.success mark {
            background-color: #CEFFF6;
            color: black;
            border-radius: 16px;
          padding: 2px 6px;
        }
        .signature-pdf {
          border-radius: 4px;
          border: 2px solid;
          padding: 16px;
          position: relative;
        }
        .signature-pdf h5 {
            position: absolute;
            top: -28px;
            left: 0px;
        }
        .signature-pdf.success {
          background-color: #CEFFF6;
        }
        .signature-pdf.success mark {
          background-color: #CEFFF6;
          color: black;
          border-radius: 16px;
          padding: 2px 6px;
          }

        .signature-pdf.primary {
          background-color: #88B3FF;
        }
        .signature-pdf.primary mark {
          background-color: #88B3FF;
          color: black;
          border-radius: 16px;
          padding: 2px 6px;
        }
        .date-box {
          background-color: #88B3FF;
          color: white;
          padding: 8px;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
        }
        .date-box p {
            margin-bottom: 4px;
            font-family:'Courier New', Courier, monospace;
        }
        .date-box label {
            color: white;
            padding: 8px 0px;
        }
      </style>
    </head>
    <body class="font-sans">
      <div class="container pdf-form py-0 mx-auto px-24 pt-8">
        <h1 class="uppercase text-center mb-8 font-bold text-2xl">Constat amiable de dégât des eaux</h1>
        <form class="simple_form edit_joint_reports_water_damage" id="edit_joint_reports_water_damage_7fe3e4b6-783f-4a7f-bb99-11ca3fbe9b50" novalidate="novalidate" action="/constat_amiables/degat_des_eaux/7fe3e4b6-783f-4a7f-bb99-11ca3fbe9b50" accept-charset="UTF-8" method="post" data-hs-cf-bound="true"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="aGEpFqt48VsKJ75vVIo4ggYIGoxvRpb9keGtbifG90cncmCSnQOHvNRUEEFurKd6WnWrPH8irXfnMgCU4XRRYQ==">
          <div class="flex items-center mb-1">
            <div class="w-2/12 date-box">
              <label class="col-form-label">Date du dégât des eaux</label>
              <p>Le {{date}}</p>
            </div>
            <div class="w-10/12 mt-3">
              <div class="flex mb-1 string optional joint_reports_water_damage_address form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_address">Adresse complète du lieu du sinistre</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="{{address}}" name="joint_reports_water_damage[address]" id="joint_reports_water_damage_address" ></div></div>
              <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_building_type form-group-valid"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">Il s'agit :</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[building_type][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="d'une maison particulière" {{#if house}}checked="checked"{{/if}} name="joint_reports_water_damage[building_type][]" id="joint_reports_water_damage_building_type_dune_maison_particulière"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_building_type_dune_maison_particulière">d'une maison particulière</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="d'un immeuble en copropriété" {{#if condoBuilding}}checked="checked"{{/if}} name="joint_reports_water_damage[building_type][]" id="joint_reports_water_damage_building_type_dun_immeuble_en_copropriété"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_building_type_dun_immeuble_en_copropriété">d'un immeuble en copropriété</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="d'un immeuble locatif" {{#if rentalBuilding}}checked="checked"{{/if}} name="joint_reports_water_damage[building_type][]" id="joint_reports_water_damage_building_type_dun_immeuble_locatif"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_building_type_dun_immeuble_locatif">d'un immeuble locatif</label></div></div></div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_recent_building"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">L'immeuble a-t-il été construit depuis moins de 10 ans ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[recent_building][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" {{#if recent_building}}checked="checked"{{/if}} name="joint_reports_water_damage[recent_building][]" id="joint_reports_water_damage_recent_building_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_recent_building_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional"  readonly="readonly" type="checkbox" value="false" {{#unless recent_building}}checked="checked"{{/unless}} name="joint_reports_water_damage[recent_building][]" id="joint_reports_water_damage_recent_building_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_recent_building_false">Non</label></div></div></div>
              <div class="flex">
                <div class="w-5/12">
                  <div class="flex mb-1 string optional joint_reports_water_damage_syndic_name"><label class="col-form-label string optional" for="joint_reports_water_damage_syndic_name">Nom du syndic ou du gérant</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[syndic_name]" id="joint_reports_water_damage_syndic_name" ></div></div>
                </div>
                <div class="w-7/12">
                  <div class="flex mb-1 string optional joint_reports_water_damage_syndic_address"><label class="col-form-label string optional" for="joint_reports_water_damage_syndic_address">Adresse du syndic ou du gérant</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[syndic_address]" id="joint_reports_water_damage_syndic_address" ></div></div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-center my-8 font-bold">Les parties concernées</h2>
          <div class="flex justify-between">
            <div class="w-1/2 person-pdf primary">
              <h3>Partie <mark>A</mark></h3>
              <!-- BEGIN app/views/joint_reports/water_damages/_pdf_person_fields.html.erb --><div class="flex flex-wrap">
            <div class="w-1/2">
              <div class="flex mb-1 string optional joint_reports_water_damage_person_1_first_name form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_first_name">Prénom</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Louis" name="joint_reports_water_damage[person_1_first_name]" id="joint_reports_water_damage_person_1_first_name" ></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 string optional joint_reports_water_damage_person_1_last_name form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_last_name">Nom</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Sommer" name="joint_reports_water_damage[person_1_last_name]" id="joint_reports_water_damage_person_1_last_name" ></div></div>
            </div>
            <div class="w-full">
              <div class="flex mb-1 text optional joint_reports_water_damage_person_1_address form-group-valid"><label class="col-form-label text optional" for="joint_reports_water_damage_person_1_address">Adresse</label><div class="flex items-end flex-grow"><textarea class="form-control text optional" name="joint_reports_water_damage[person_1_address]" id="joint_reports_water_damage_person_1_address" >11 rue du Bouquet de Longchamp</textarea></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 string optional joint_reports_water_damage_person_1_building"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_building">Bâtiment</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[person_1_building]" id="joint_reports_water_damage_person_1_building" ></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 string optional joint_reports_water_damage_person_1_floor"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_floor">Etage</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[person_1_floor]" id="joint_reports_water_damage_person_1_floor" ></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 email optional joint_reports_water_damage_person_1_email form-group-valid"><label class="col-form-label email optional" for="joint_reports_water_damage_person_1_email">Email</label><div class="flex items-end flex-grow"><input class="form-control string email optional" type="email" value="louis.sommer@gmail.com" name="joint_reports_water_damage[person_1_email]" id="joint_reports_water_damage_person_1_email" ></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 tel optional joint_reports_water_damage_person_1_phone form-group-valid"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_1_phone">Téléphone</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" type="tel" value="0649847460" name="joint_reports_water_damage[person_1_phone]" id="joint_reports_water_damage_person_1_phone" ></div></div>
            </div>
          </div>

          <div class="flex mb-1 string optional joint_reports_water_damage_person_1_insurer form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_insurer">Assureur habitation</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Luko" name="joint_reports_water_damage[person_1_insurer]" id="joint_reports_water_damage_person_1_insurer"></div></div>
          <div class="flex mb-1 string optional joint_reports_water_damage_person_1_contract_number form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_contract_number">Numéro de contrat d'assurance</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="23876" name="joint_reports_water_damage[person_1_contract_number]" id="joint_reports_water_damage_person_1_contract_number" ></div></div>
          <div class="flex mb-1 string optional joint_reports_water_damage_person_1_claim_number form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_claim_number">Numéro de sinistre</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="23" name="joint_reports_water_damage[person_1_claim_number]" id="joint_reports_water_damage_person_1_claim_number" ></div></div>
          <div class="flex mb-1 string optional joint_reports_water_damage_person_1_broker_name"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_broker_name">Agent ou courtier</label><div class="flex items-end flex-grow"><input class="form-control string optional" placeholder="-" type="text" value="" name="joint_reports_water_damage[person_1_broker_name]" id="joint_reports_water_damage_person_1_broker_name" ></div></div>
          <div class="flex mb-1 tel optional joint_reports_water_damage_person_1_broker_phone"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_1_broker_phone">Téléphone de l'agent</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" placeholder="-" type="tel" value="" name="joint_reports_water_damage[person_1_broker_phone]" id="joint_reports_water_damage_person_1_broker_phone" ></div></div>
          <div class="flex mb-1 text optional joint_reports_water_damage_person_1_broker_address"><label class="col-form-label text optional" for="joint_reports_water_damage_person_1_broker_address">Addresse de l'agent:</label><div class="flex items-end flex-grow"><textarea class="form-control text optional" placeholder="-" name="joint_reports_water_damage[person_1_broker_address]" id="joint_reports_water_damage_person_1_broker_address" ></textarea></div></div>

          <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_1_home_usage"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">S'agit-il d'un local à usage d'habitation ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_1_home_usage][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" {{#if home_usage_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_1_home_usage][]" id="joint_reports_water_damage_person_1_home_usage_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_home_usage_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless home_usage_a}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_1_home_usage][]" id="joint_reports_water_damage_person_1_home_usage_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_home_usage_false">Non</label></div></div></div>
          <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_1_termination"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">La résiliation du bail a-t-elle été demandée ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_1_termination][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" {{#if termination_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_1_termination][]" id="joint_reports_water_damage_person_1_termination_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_termination_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless termination_a}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_1_termination][]" id="joint_reports_water_damage_person_1_termination_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_termination_false">Non</label></div></div></div>
          <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_1_seasonal_furnished_rental"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">S'agit-il d'une location meublée ou saisonnière ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_1_seasonal_furnished_rental][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" {{#if seasonal_furnished_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_1_seasonal_furnished_rental][]" id="joint_reports_water_damage_person_1_seasonal_furnished_rental_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_seasonal_furnished_rental_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless seasonal_furnished_a}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_1_seasonal_furnished_rental][]" id="joint_reports_water_damage_person_1_seasonal_furnished_rental_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_seasonal_furnished_rental_false">Non</label></div></div></div>
          <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_1_damage"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">Avez-vous subi des dommages ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_1_damage][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_1_damage][]" {{#if damage_a}}checked="checked"{{/if}} id="joint_reports_water_damage_person_1_damage_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_damage_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" name="joint_reports_water_damage[person_1_damage][]" {{#unless damage_a}}checked="checked"{{/unless}} id="joint_reports_water_damage_person_1_damage_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_damage_false">Non</label></div></div></div>

          <div class="flex flex-wrap">
            <div class="w-1/2 pl-2">
              <fieldset class="flex flex-col mb-1 check_boxes optional joint_reports_water_damage_person_2_category form-group-valid"><label class="col-form-label pl-0 mb-2">Vous êtes :</label><input type="hidden" name="joint_reports_water_damage[person_2_category][]" value=""><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Locataire ou occupant non propriétaire" {{#if renter_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire">Locataire ou occupant non propriétaire</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Syndic" {{#if syndic_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_syndic"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_syndic">Syndic</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Gérant de l'immeuble" {{#if manager_a}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_gérant_de_limmeuble"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_gérant_de_limmeuble">Gérant de l'immeuble</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Propriétaire / Copropriétaire" name="joint_reports_water_damage[person_2_category][]" {{#if owner_a}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire">Propriétaire / Copropriétaire</label></div></fieldset>
            </div>
            <div class="w-1/2">
              <div class="pt-3 ">
                <div class="flex mb-1 string optional joint_reports_water_damage_person_1_landlord_name form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_1_landlord_name">Nom du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Michael Douglas" name="joint_reports_water_damage[person_1_landlord_name]" id="joint_reports_water_damage_person_1_landlord_name" ></div></div>
                <div class="flex mb-1 tel optional joint_reports_water_damage_person_1_landlord_phone form-group-valid"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_1_landlord_phone">Téléphone du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" type="tel" value="0123456789" name="joint_reports_water_damage[person_1_landlord_phone]" id="joint_reports_water_damage_person_1_landlord_phone" ></div></div>
              </div>
              <div class="">
                <div class="flex-col check_boxes optional joint_reports_water_damage_person_1_owner_occupant"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">Êtes-vous propriétaire occupant ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_1_owner_occupant][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_1_owner_occupant][]" {{#if owner_occupant_a}}checked="checked"{{/if}} id="joint_reports_water_damage_person_1_owner_occupant_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_owner_occupant_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless owner_occupant_a}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_1_owner_occupant][]" id="joint_reports_water_damage_person_1_owner_occupant_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_1_owner_occupant_false">Non</label></div></div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 person-pdf success">
          <h3>Partie <mark>B</mark></h3>
          <div class="flex flex-wrap">
          <div class="w-1/2">
            <div class="flex mb-1 string optional joint_reports_water_damage_person_2_first_name form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_first_name">Prénom</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Jojo" name="joint_reports_water_damage[person_2_first_name]" id="joint_reports_water_damage_person_2_first_name" ></div></div>
          </div>
          <div class="w-1/2">
            <div class="flex mb-1 string optional joint_reports_water_damage_person_2_last_name form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_last_name">Nom</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="Rabbit" name="joint_reports_water_damage[person_2_last_name]" id="joint_reports_water_damage_person_2_last_name" ></div></div>
          </div>
          <div class="w-full">
            <div class="flex mb-1 text optional joint_reports_water_damage_person_2_address form-group-valid"><label class="col-form-label text optional" for="joint_reports_water_damage_person_2_address">Adresse</label><div class="flex items-end flex-grow"><textarea class="form-control text optional" name="joint_reports_water_damage[person_2_address]" id="joint_reports_water_damage_person_2_address" >11 rue du Bouquet de Longchamp</textarea></div></div>
          </div>
          <div class="w-1/2">
            <div class="flex mb-1 string optional joint_reports_water_damage_person_2_building"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_building">Bâtiment</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[person_2_building]" id="joint_reports_water_damage_person_2_building" ></div></div>
          </div>
          <div class="w-1/2">
            <div class="flex mb-1 string optional joint_reports_water_damage_person_2_floor"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_floor">Etage</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[person_2_floor]" id="joint_reports_water_damage_person_2_floor" ></div></div>
          </div>
          <div class="w-1/2">
            <div class="flex mb-1 email optional joint_reports_water_damage_person_2_email form-group-valid"><label class="col-form-label email optional" for="joint_reports_water_damage_person_2_email">Email</label><div class="flex items-end flex-grow"><input class="form-control string email optional" type="email" value="louis@lyanne.fr" name="joint_reports_water_damage[person_2_email]" id="joint_reports_water_damage_person_2_email" ></div></div>
          </div>
          <div class="w-1/2">
            <div class="flex mb-1 tel optional joint_reports_water_damage_person_2_phone form-group-valid"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_2_phone">Téléphone</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" type="tel" value="649847460" name="joint_reports_water_damage[person_2_phone]" id="joint_reports_water_damage_person_2_phone" ></div></div>
          </div>
        </div>

        <div class="flex mb-1 string optional joint_reports_water_damage_person_2_insurer form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_insurer">Assureur habitation</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="CM" name="joint_reports_water_damage[person_2_insurer]" id="joint_reports_water_damage_person_2_insurer"></div></div>
        <div class="flex mb-1 string optional joint_reports_water_damage_person_2_contract_number form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_contract_number">Numéro de contrat d'assurance</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="23987" name="joint_reports_water_damage[person_2_contract_number]" id="joint_reports_water_damage_person_2_contract_number" ></div></div>
        <div class="flex mb-1 string optional joint_reports_water_damage_person_2_claim_number form-group-valid"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_claim_number">Numéro de sinistre</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="22E3" name="joint_reports_water_damage[person_2_claim_number]" id="joint_reports_water_damage_person_2_claim_number" ></div></div>
        <div class="flex mb-1 string optional joint_reports_water_damage_person_2_broker_name"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_broker_name">Agent ou courtier</label><div class="flex items-end flex-grow"><input class="form-control string optional" placeholder="-" type="text" value="" name="joint_reports_water_damage[person_2_broker_name]" id="joint_reports_water_damage_person_2_broker_name" ></div></div>
        <div class="flex mb-1 tel optional joint_reports_water_damage_person_2_broker_phone"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_2_broker_phone">Téléphone de l'agent</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" placeholder="-" type="tel" value="" name="joint_reports_water_damage[person_2_broker_phone]" id="joint_reports_water_damage_person_2_broker_phone" ></div></div>
        <div class="flex mb-1 text optional joint_reports_water_damage_person_2_broker_address"><label class="col-form-label text optional" for="joint_reports_water_damage_person_2_broker_address">Addresse de l'agent:</label><div class="flex items-end flex-grow"><textarea class="form-control text optional" placeholder="-" name="joint_reports_water_damage[person_2_broker_address]" id="joint_reports_water_damage_person_2_broker_address" ></textarea></div></div>

        <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_2_home_usage"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">S'agit-il d'un local à usage d'habitation ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_2_home_usage][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_2_home_usage][]" id="joint_reports_water_damage_person_2_home_usage_true" {{#if home_usage_b}} checked="checked" {{/if}}><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_home_usage_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" name="joint_reports_water_damage[person_2_home_usage][]" id="joint_reports_water_damage_person_2_home_usage_false" {{#unless home_usage_b}}checked="checked"{{/unless}}><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_home_usage_false">Non</label></div></div></div>
        <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_2_termination"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">La résiliation du bail a-t-elle été demandée ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_2_termination][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_2_termination][]" {{#if termination_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_termination_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_termination_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless termination_b}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_2_termination][]" id="joint_reports_water_damage_person_2_termination_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_termination_false">Non</label></div></div></div>
        <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_2_seasonal_furnished_rental"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">S'agit-il d'une location meublée ou saisonnière ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_2_seasonal_furnished_rental][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_2_seasonal_furnished_rental][]" {{#if seasonal_furnished_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_seasonal_furnished_rental_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_seasonal_furnished_rental_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless seasonal_furnished_b}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_2_seasonal_furnished_rental][]" id="joint_reports_water_damage_person_2_seasonal_furnished_rental_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_seasonal_furnished_rental_false">Non</label></div></div></div>
        <div class="flex items-center mb-1 justify-between check_boxes optional joint_reports_water_damage_person_2_damage"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">Avez-vous subi des dommages ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_2_damage][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_2_damage][]" {{#if damage_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_damage_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_damage_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless damage_b}}checked="checked"{{/unless}} name="joint_reports_water_damage[person_2_damage][]" id="joint_reports_water_damage_person_2_damage_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_damage_false">Non</label></div></div></div>

        <div class="flex flex-wrap">
          <div class="w-1/2 pl-2">
            <fieldset class="flex flex-col mb-1 check_boxes optional joint_reports_water_damage_person_2_category form-group-valid"><label class="col-form-label pl-0 mb-2">Vous êtes :</label><input type="hidden" name="joint_reports_water_damage[person_2_category][]" value=""><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Locataire ou occupant non propriétaire" {{#if renter_b}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire">Locataire ou occupant non propriétaire</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Syndic" {{#if syndic_b}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_syndic"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_syndic">Syndic</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Gérant de l'immeuble" {{#if manager_b}}checked="checked"{{/if}} name="joint_reports_water_damage[person_2_category][]" id="joint_reports_water_damage_person_2_category_gérant_de_limmeuble"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_gérant_de_limmeuble">Gérant de l'immeuble</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes optional" type="checkbox" value="Propriétaire / Copropriétaire" name="joint_reports_water_damage[person_2_category][]" {{#if owner_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire">Propriétaire / Copropriétaire</label></div></fieldset>
          </div>
          <div class="w-1/2">
            <div class="pt-3 ">
              <div class="flex mb-1 string optional joint_reports_water_damage_person_2_landlord_name"><label class="col-form-label string optional" for="joint_reports_water_damage_person_2_landlord_name">Nom du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[person_2_landlord_name]" id="joint_reports_water_damage_person_2_landlord_name" ></div></div>
              <div class="flex mb-1 tel optional joint_reports_water_damage_person_2_landlord_phone"><label class="col-form-label tel optional" for="joint_reports_water_damage_person_2_landlord_phone">Téléphone du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string tel optional" type="tel" value="" name="joint_reports_water_damage[person_2_landlord_phone]" id="joint_reports_water_damage_person_2_landlord_phone" ></div></div>
            </div>
            <div class="">
              <div class="flex-col check_boxes optional joint_reports_water_damage_person_2_owner_occupant"><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes optional">Êtes-vous propriétaire occupant ?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[person_2_owner_occupant][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[person_2_owner_occupant][]" {{#if owner_occupant_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_owner_occupant_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_owner_occupant_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" name="joint_reports_water_damage[person_2_owner_occupant][]" {{#unless owner_occupant_b}}checked="checked"{{/unless}} id="joint_reports_water_damage_person_2_owner_occupant_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_person_2_owner_occupant_false">Non</label></div></div></div>
            </div>
          </div>
        </div>
  <!-- END app/views/joint_reports/water_damages/_pdf_person_fields.html.erb -->
        </div>
      </div>
      <h2 class="text-center my-8 font-bold">Les causes</h2>
      <div class="flex">
        <div class="w-full">
          <div class="flex gap-4">
            <div class="w-1/3">
              <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_leakage_test"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">Recherche de fuite effectuée :</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[leakage_test][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" {{#if leakage_test}}checked="checked"{{/if}} type="checkbox" value="true" name="joint_reports_water_damage[leakage_test][]" id="joint_reports_water_damage_leakage_test_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_test_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless leakage_test}}checked="checked"{{/unless}} name="joint_reports_water_damage[leakage_test][]" id="joint_reports_water_damage_leakage_test_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_test_false">Non</label></div></div></div>
            </div>
            <div class="w-1/3">
              <div class="flex mb-1 string optional joint_reports_water_damage_leakage_company"><label class="col-form-label string optional" for="joint_reports_water_damage_leakage_company">Nom de l'entreprise/artisan</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[leakage_company]" id="joint_reports_water_damage_leakage_company" ></div></div>
            </div>
            <div class="w-1/3  w-50">
              <div class="flex mb-1 string optional joint_reports_water_damage_leakage_payment"><label class="col-form-label string optional" for="joint_reports_water_damage_leakage_payment">Frais de recherche réglés par</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[leakage_payment]" id="joint_reports_water_damage_leakage_payment"></div></div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-1/3">
              <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_origin_found"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">La cause a été identifiée :</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[origin_found][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" {{#if origin_found}}checked="checked"{{/if}} name="joint_reports_water_damage[origin_found][]" id="joint_reports_water_damage_origin_found_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_origin_found_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless origin_found}}checked="checked"{{/unless}} name="joint_reports_water_damage[origin_found][]" id="joint_reports_water_damage_origin_found_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_origin_found_false">Non</label></div></div></div>
            </div>
            <div class="w-1/4">
              <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_repaired"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">La fuite a été réparée :</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[repaired][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" {{#if repaired}}checked="checked"{{/if}} value="true" name="joint_reports_water_damage[repaired][]" id="joint_reports_water_damage_repaired_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_repaired_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" {{#unless repaired}}checked="checked"{{/unless}} name="joint_reports_water_damage[repaired][]" id="joint_reports_water_damage_repaired_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_repaired_false">Non</label></div></div></div>
            </div>
            <div class="w-5/12">
              <div class="flex mb-1 string optional joint_reports_water_damage_responsibility"><label class="col-form-label string optional" for="joint_reports_water_damage_responsibility">L'origine du dégât des eaux est située chez</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[responsibility]" id="joint_reports_water_damage_responsibility"></div></div>
            </div>
          </div>

          <div class="mb-2 check_boxes optional joint_reports_water_damage_leakage_cause form-group-valid">
            <label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">La fuite a été causée par :</label>
            <div class="px-2 flex gap-4">
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Fuite sur canalisation" {{#if pipe}}checked="checked"{{/if}} name="joint_reports_water_damage[leakage_cause][]" id="joint_reports_water_damage_leakage_cause_fuite_sur_canalisation"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_fuite_sur_canalisation">Fuite sur canalisation</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Fuite ou débordement d'appareils à effet d'eau" {{#if overflow}}checked="checked"{{/if}} name="joint_reports_water_damage[leakage_cause][]" id="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_dappareils_à_effet_deau"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_dappareils_à_effet_deau">Fuite ou débordement d'appareils à effet d'eau</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Fuite ou débordement de chéneaux ou de gouttières" {{#if gutter}}checked="checked"{{/if}} name="joint_reports_water_damage[leakage_cause][]" id="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_de_chéneaux_ou_de_gouttières"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_de_chéneaux_ou_de_gouttières">Fuite ou débordement de chéneaux ou de gouttières</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Infiltrations" {{#if ingress}}checked="checked"{{/if}} name="joint_reports_water_damage[leakage_cause][]" id="joint_reports_water_damage_leakage_cause_infiltrations"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_infiltrations">Infiltrations</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Gel" name="joint_reports_water_damage[leakage_cause][]" {{#if other_cause}}checked="checked"{{/if}} id="joint_reports_water_damage_leakage_cause_gel"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_gel">Gel</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Autre cause" name="joint_reports_water_damage[leakage_cause][]" id="joint_reports_water_damage_leakage_cause_autre_cause"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_autre_cause">Autre cause</label></div>
            </div>
          </div>
          <div class="">
            <div class="flex mb-1 string optional joint_reports_water_damage_other_cause"><label class="col-form-label string optional" for="joint_reports_water_damage_other_cause">Si autre, précisez:</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[other_cause]" id="joint_reports_water_damage_other_cause"></div></div>
          </div>
          <div class="form-group flex">
            <label class="col-form-label pt-0 mr-3">Si fuite sur canalisation, précisez:</label>
            <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_pipe_owner mr-5"><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[pipe_owner][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Commune" {{#if common_pipe}}checked="checked"{{/if}} name="joint_reports_water_damage[pipe_owner][]" id="joint_reports_water_damage_pipe_owner_commune"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_owner_commune">Commune</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Particulier" name="joint_reports_water_damage[pipe_owner][]" id="joint_reports_water_damage_pipe_owner_particulier"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_owner_particulier">Particulier</label></div></div></div>
            <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_pipe_role mr-5"><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[pipe_role][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Alimentation" name="joint_reports_water_damage[pipe_role][]" id="joint_reports_water_damage_pipe_role_alimentation"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_role_alimentation">Alimentation</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Evacuation" name="joint_reports_water_damage[pipe_role][]" id="joint_reports_water_damage_pipe_role_evacuation"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_role_evacuation">Evacuation</label></div></div></div>
            <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_pipe_accessibility mr-5"><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[pipe_accessibility][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Accessible" name="joint_reports_water_damage[pipe_accessibility][]" id="joint_reports_water_damage_pipe_accessibility_accessible"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_accessibility_accessible">Accessible</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Non-accessible" name="joint_reports_water_damage[pipe_accessibility][]" id="joint_reports_water_damage_pipe_accessibility_non-accessible"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_pipe_accessibility_non-accessible">Non-accessible</label></div></div></div>
          </div>
          <div class="">
            <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_infiltrations form-group-valid"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">Si infiltrations, précisez :</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[infiltrations][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Toiture" name="joint_reports_water_damage[infiltrations][]" id="joint_reports_water_damage_infiltrations_toiture"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_toiture">Toiture</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Façade" name="joint_reports_water_damage[infiltrations][]" id="joint_reports_water_damage_infiltrations_façade"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_façade">Façade</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Fenêtre ou porte-fenêtre" name="joint_reports_water_damage[infiltrations][]" id="joint_reports_water_damage_infiltrations_fenêtre_ou_porte-fenêtre"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_fenêtre_ou_porte-fenêtre">Fenêtre ou porte-fenêtre</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="Joint d'étanchéité (sanitaire ou carrelage)" name="joint_reports_water_damage[infiltrations][]" id="joint_reports_water_damage_infiltrations_joint_détanchéité_sanitaire_ou_carrelage"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_joint_détanchéité_sanitaire_ou_carrelage">Joint d'étanchéité (sanitaire ou carrelage)</label></div></div></div>
          </div>
          <div class="flex items-center mb-1 check_boxes optional joint_reports_water_damage_craftman_responsibility"><label class="col-form-label pt-0 whitespace-nowrap check_boxes optional">Un entrepreneur, un installateur ou un vendeur vous paraît-il être à l'origine du sinistre?</label><div class="px-2 flex gap-4"><input type="hidden" name="joint_reports_water_damage[craftman_responsibility][]" value=""><div class="flex items-center"><input class="form-check-input check_boxes optional" type="checkbox" value="true" name="joint_reports_water_damage[craftman_responsibility][]" id="joint_reports_water_damage_craftman_responsibility_true"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_craftman_responsibility_true">Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes optional" readonly="readonly" type="checkbox" value="false" checked="checked" name="joint_reports_water_damage[craftman_responsibility][]" id="joint_reports_water_damage_craftman_responsibility_false"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_craftman_responsibility_false">Non</label></div></div></div>
          <div class="mb-4 ">
            <div class="w-full">
              <div class="flex mb-1 string optional joint_reports_water_damage_craftman_reason"><label class="col-form-label string optional" for="joint_reports_water_damage_craftman_reason">Précisez pourquoi :</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[craftman_reason]" id="joint_reports_water_damage_craftman_reason"></div></div>
            </div>
            <div class="w-2/3">
              <div class="flex mb-1 string optional joint_reports_water_damage_craftman_name"><label class="col-form-label string optional" for="joint_reports_water_damage_craftman_name">Nom de l'entrepreneur</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[craftman_name]" id="joint_reports_water_damage_craftman_name" ></div></div>
            </div>
            <div class="w-2/3">
              <div class="flex mb-1 string optional joint_reports_water_damage_craftman_address"><label class="col-form-label string optional" for="joint_reports_water_damage_craftman_address">Adresse de l'entrepreneur</label><div class="flex items-end flex-grow"><input class="form-control string optional" type="text" value="" name="joint_reports_water_damage[craftman_address]" id="joint_reports_water_damage_craftman_address" ></div></div>
            </div>
          </div>
        </div>
      </div>
  </form>
    <div class="flex mt-5">
        <div class="w-1/2">
          <div class="flex mb-3">
            <label class="col-form-label pl-0 pr-3 whitespace-nowrap">Fait à :</label>
            <input type="text" value="Paris">
          </div>
          <div class="flex">
            <label class="col-form-label pl-0 pr-3 whitespace-nowrap" for="">Le :</label>
            <input type="text" value="Le 22/12/2021">
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex">
            <div class="w-1/2">
              <div class="signature-pdf primary w-full py-8">
                <h5>Signature <mark>A</mark></h5>

              </div>
            </div>
            <div class="w-1/2">
              <div class="signature-pdf success w-full py-8">
                <h5>Signature <mark>B</mark></h5>

              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="small mt-4">
        Les informations recueillies sur ce constat amiable permettront aux assureurs des parties concernées d’exécuter le contrat d'assurance et d’exercer leurs recours. Ces informations pourront être communiquées aux personnes intervenant dans l’exécution du contrat. Ces informations
        seront conservées le temps nécessaire à l’exécution du contrat et à l’exercice des recours et jusqu’à la fin des durées légales de prescription. Vous disposez de droits sur vos données personnelles que vous pouvez exercer en contactant les assureurs des parties concernées.
      </p>
      <div class="text-center mt-4 mx-auto">
        <img width="80" src="https://res.cloudinary.com/lyanne/image/upload/v1647812636/lyanne-static-assets/images/logo.svg">
      </div>
    </div>
  </body>
</html>
`;

export const waterDamageTemplate: any = (context: any) => {
  return handlebars.compile(html)(context);
};

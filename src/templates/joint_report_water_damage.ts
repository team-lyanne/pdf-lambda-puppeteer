import * as handlebars from "handlebars";
import Handlebars from "handlebars";

Handlebars.registerHelper("ifIncludes", function( value, array, options ){
	array = ( array instanceof Array ) ? array : [array];
	return (array.indexOf(value) > -1) ? options.fn( this ) : "";
});

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
          font-family: Courier, monospace;
          width: 100%;
        }
        input[type=checkbox] {
          height: 12px;
          width: 12px;
          margin-right: 4px;
        }
        input, label, p, textarea {
          font-size: 8px !important;
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
          font-family: Courier, monospace !important;
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
          line-height: initial !important;
          padding-top: 4px;
        }
        .small {
          font-size: 8px;
          color: rgba(1,1,1,0.6);
          line-height: 1;
        }
        .person-pdf {
          border-radius: 0 4px 0 4px;
          padding: 12px 16px;
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
            font-family: Courier, monospace;
        }
        .date-box label {
            color: white;
            padding: 8px 0px;
        }
      </style>
    </head>
    <body class="font-sans">
      <div class="pdf-form mx-auto px-8 pt-2">
        <h1 class="uppercase text-center mb-4 font-bold text-md">Constat amiable de dégât des eaux</h1>
        <form class="simple_form edit_joint_reports_water_damage" id="edit_-783f-4a7f-bb99-11ca3fbe9b50" novalidate="novalidate" action="/constat_amiables/degat_des_eaux/7fe3e4b6-783f-4a7f-bb99-11ca3fbe9b50" accept-charset="UTF-8" method="post" data-hs-cf-bound="true"><input type="hidden"  value="patch"><input type="hidden"  value="aGEpFqt48VsKJ75vVIo4ggYIGoxvRpb9keGtbifG90cncmCSnQOHvNRUEEFurKd6WnWrPH8irXfnMgCU4XRRYQ==">
          <div class="flex items-center mb-1">
            <div class="w-2/12 date-box">
              <label class="col-form-label">Date du dégât des eaux</label>
              <p>Le {{date}}</p>
            </div>
            <div class="w-10/12 mt-3">
              <div class="flex mb-1 "><label class="col-form-label" >Adresse complète du lieu du sinistre</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{address}}"></div></div>
              <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">Il s'agit :</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="d'une maison particulière" {{#if house}}checked="checked"{{/if}}  id="joint_reports_water_damage_building_type_dune_maison_particulière"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_building_type_dune_maison_particulière">d'une maison particulière</label></div><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="d'un immeuble en copropriété" {{#if condoBuilding}}checked="checked"{{/if}}  id="joint_reports_water_damage_building_type_dun_immeuble_en_copropriété"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_building_type_dun_immeuble_en_copropriété">d'un immeuble en copropriété</label></div><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="d'un immeuble locatif" {{#if rentalBuilding}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >d'un immeuble locatif</label></div></div></div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">L'immeuble a-t-il été construit depuis moins de 10 ans ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if recent_building}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes "  readonly="readonly" type="checkbox" value="false" {{#unless recent_building}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
              <div class="flex">
                <div class="w-5/12">
                  <div class="flex mb-1 "><label class="col-form-label" >Nom du syndic ou du gérant</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{syndic_name}}"></div></div>
                </div>
                <div class="w-7/12">
                  <div class="flex mb-1 "><label class="col-form-label" >Adresse du syndic ou du gérant</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{syndic_address}}"></div></div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-center my-4 font-bold text-md text-md">Les parties concernées</h2>
          <div class="flex justify-between">
            <div class="w-1/2 person-pdf primary">
              <h3>Partie <mark>A</mark></h3>
              <!-- BEGIN app/views/joint_reports/water_damages/_pdf_person_fields.html.erb --><div class="flex flex-wrap">
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Prénom</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{first_name_a}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Nom</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{last_name_a}}"></div></div>
            </div>
            <div class="w-full">
              <div class="flex mb-1"><label class="col-form-label" >Adresse</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{address_a}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Bâtiment</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{building_a}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Etage</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{floor_a}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1"><label class="col-form-label" >Email</label><div class="flex items-end flex-grow"><input class="form-control string email " type="email" value="{{email_a}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1"><label class="col-form-label" >Téléphone</label><div class="flex items-end flex-grow"><input class="form-control string tel " type="tel" value="{{phone_a}}"></div></div>
            </div>
          </div>

          <div class="flex mb-1"><label class="col-form-label" >Assureur habitation</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{insurer_a}}"  ></div></div>
          <div class="flex mb-1"><label class="col-form-label" >Numéro de contrat d'assurance</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{contract_number_a}}"></div></div>
          <div class="flex mb-1"><label class="col-form-label" >Numéro de sinistre</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{claim_number_a}}"></div></div>
          <div class="flex mb-1"><label class="col-form-label" >Agent ou courtier</label><div class="flex items-end flex-grow"><input class="form-control" placeholder="-" type="text" value="{{broker_name_a}}"></div></div>
          <div class="flex mb-1"><label class="col-form-label" >Téléphone de l'agent</label><div class="flex items-end flex-grow"><input class="form-control" placeholder="-" type="tel" value="{{broker_phone_a}}"></div></div>
          <div class="flex mb-1"><label class="col-form-label" >Addresse de l'agent</label><div class="flex items-end flex-grow"><input class="form-control " placeholder="-" type="text" value="{{broker_address_a}}"></div></div>

          <div class="flex items-center mb-1 justify-between check_boxes "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">S'agit-il d'un local à usage d'habitation ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if home_usage_a}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div>
          <div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless home_usage_a}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div>
          </div></div>
          <div class="flex items-center mb-1 justify-between check_boxes "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">La résiliation du bail a-t-elle été demandée ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if termination_a}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div>
          <div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless termination_a}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div>
          </div></div>
          <div class="flex items-center mb-1 justify-between check_boxes "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">S'agit-il d'une location meublée ou saisonnière ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if seasonal_furnished_a}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div>
          <div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless seasonal_furnished_a}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div>
          </div></div>
          <div class="flex items-center mb-1 justify-between check_boxes "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">Avez-vous subi des dommages ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"  {{#if damage_a}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div>
          <div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false"  {{#unless damage_a}}checked="checked"{{/unless}} ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div>
          </div></div>

          <div class="flex flex-wrap">
            <div class="w-1/2 pl-2">
              <fieldset class="flex flex-col check_boxes  "><label class="col-form-label pl-0 mb-2">Vous êtes :</label><input type="hidden"  value="">
				  <div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Locataire ou occupant non propriétaire" {{#if renter_a}}checked="checked"{{/if}}  id="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire">Locataire/Occupant</label></div>
				  <div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Syndic" {{#if syndic_a}}checked="checked"{{/if}}  ><label class="collection_check_boxes" >Syndic</label></div>
				  <div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Gérant de l'immeuble" {{#if manager_a}}checked="checked"{{/if}}  id="joint_reports_water_damage_person_2_category_gérant_de_limmeuble"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_gérant_de_limmeuble">Gérant de l'immeuble</label></div>
				  <div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Propriétaire / Copropriétaire"  {{#if owner_a}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire">Propriétaire / Copropriétaire</label></div>
              </fieldset>
                <div class="pl-0 pt-2 flex check_boxes">
                	<label class="pl-0 col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes">Êtes-vous propriétaire occupant ?</label>
                	<div class="flex gap-4">
                		<div class="flex items-center">
                			<input class="form-check-input check_boxes" type="checkbox" value="true"  {{#if owner_occupant_a}}checked="checked"{{/if}} >
                			<label class="whitespace-nowrap collection_check_boxes" >Oui</label>
                		</div>
                		<div class="flex items-center">
                			<input class="form-check-input check_boxes" readonly="readonly" type="checkbox" value="false" {{#unless owner_occupant_a}}checked="checked"{{/unless}}  >
                			<label class="whitespace-nowrap collection_check_boxes" >Non</label>
                		</div>
                	</div>
              	</div>
            </div>
            <div class="w-1/2">
              <div class="pt-0">
                <div class="mb-0"><label class="pl-0 col-form-label" >Nom du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{landlord_name_a}}"></div></div>
                <div class="mb-0"><label class="pl-0 col-form-label" >Téléphone du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string tel " type="tel" value="{{landlord_phone_a}}"></div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 person-pdf success">
          <h3>Partie <mark>B</mark></h3>
          <div class="flex flex-wrap">
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Prénom</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{first_name_b}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Nom</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{last_name_b}}"></div></div>
            </div>
            <div class="w-full">
              <div class="flex mb-1 text  "><label class="col-form-label" >Adresse</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{address_b}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Bâtiment</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{building_b}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1 "><label class="col-form-label" >Etage</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{floor_b}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1"><label class="col-form-label email " >Email</label><div class="flex items-end flex-grow"><input class="form-control string email " type="email" value="{{email_b}}"></div></div>
            </div>
            <div class="w-1/2">
              <div class="flex mb-1"><label class="col-form-label tel " >Téléphone</label><div class="flex items-end flex-grow"><input class="form-control string tel " type="tel" value="{{phone_b}}"></div></div>
            </div>
        </div>

          <div class="flex mb-1 "><label class="col-form-label" >Assureur habitation</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{insurer_b}}"  ></div></div>
          <div class="flex mb-1 "><label class="col-form-label" >Numéro de contrat d'assurance</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{contract_number_b}}"></div></div>
          <div class="flex mb-1 "><label class="col-form-label" >Numéro de sinistre</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{claim_number_b}}"></div></div>
          <div class="flex mb-1 "><label class="col-form-label" >Agent ou courtier</label><div class="flex items-end flex-grow"><input class="form-control" placeholder="-" type="text" value="{{broker_name_b}}"></div></div>
          <div class="flex mb-1"><label class="col-form-label tel " >Téléphone de l'agent</label><div class="flex items-end flex-grow"><input class="form-control string tel " placeholder="-" type="tel" value="{{broker_phone_b}}"></div></div>
          <div class="flex mb-1 text  "><label class="col-form-label text " >Addresse de l'agent:</label><div class="flex items-end flex-grow"><input class="form-control" type="text" placeholder="-" value="{{broker_address_b}}"></div></div>

        <div class="flex items-center mb-1 justify-between check_boxes  "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">S'agit-il d'un local à usage d'habitation ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"   {{#if home_usage_b}} checked="checked" {{/if}}><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false"   {{#unless home_usage_b}}checked="checked"{{/unless}}><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
        <div class="flex items-center mb-1 justify-between check_boxes  "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">La résiliation du bail a-t-elle été demandée ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"  {{#if termination_b}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless termination_b}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
        <div class="flex items-center mb-1 justify-between check_boxes  "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">S'agit-il d'une location meublée ou saisonnière ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"  {{#if seasonal_furnished_b}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless seasonal_furnished_b}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
        <div class="flex items-center justify-between check_boxes  "><label class="col-form-label pt-0 flex-grow-1 whitespace-nowrap check_boxes ">Avez-vous subi des dommages ?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"  {{#if damage_b}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless damage_b}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>

        <div class="flex flex-wrap pb-0 mb-0">
          <div class="w-1/2 pl-2">
            <fieldset class="flex flex-col check_boxes mb-1"><label class="col-form-label pl-0 mb-2">Vous êtes :</label><input type="hidden"  value=""><div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Locataire ou occupant non propriétaire" {{#if renter_b}}checked="checked"{{/if}}  id="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_locataire_ou_occupant_non_propriétaire">Locataire/Occupant</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Syndic" {{#if syndic_b}}checked="checked"{{/if}}  ><label class="collection_check_boxes" >Syndic</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Gérant de l'immeuble" {{#if manager_b}}checked="checked"{{/if}}  id="joint_reports_water_damage_person_2_category_gérant_de_limmeuble"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_gérant_de_limmeuble">Gérant de l'immeuble</label></div><div class="flex items-center mb-1"><input class="form-check-input check_boxes " type="checkbox" value="Propriétaire / Copropriétaire"  {{#if owner_b}}checked="checked"{{/if}} id="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire"><label class="collection_check_boxes" for="joint_reports_water_damage_person_2_category_propriétaire__copropriétaire">Propriétaire / Copropriétaire</label></div></fieldset>
            <div class="flex check_boxes mt-2"><label class="col-form-label pl-0 pt-0 flex-grow-1 whitespace-nowrap check_boxes ">Êtes-vous propriétaire occupant ?</label><div class="flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true"  {{#if owner_occupant_b}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false"  {{#unless owner_occupant_b}}checked="checked"{{/unless}} ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
          </div>
          <div class="w-1/2 pt-0 mt-0">
              <div class="pt-0">
                <div class="mb-0"><label class="pl-0 col-form-label" >Nom du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{landlord_name_b}}"></div></div>
                <div class="mb-0"><label class="pl-0 col-form-label" >Téléphone du propriétaire</label><div class="flex items-end flex-grow"><input class="form-control string tel " type="tel" value="{{landlord_phone_b}}"></div></div>
              </div>
            </div>
        </div>
  <!-- END app/views/joint_reports/water_damages/_pdf_person_fields.html.erb -->
        </div>
      </div>
      <h2 class="text-center my-4 font-bold text-md">Les causes</h2>
      <div class="flex">
        <div class="w-full">
          <div class="flex gap-4">
            <div class="w-1/3">
              <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">Recherche de fuite effectuée :</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " {{#if leakage_test}}checked="checked"{{/if}} type="checkbox" value="true"  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless leakage_test}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
            </div>
            <div class="w-1/3">
              <div class="flex mb-1 "><label class="col-form-label" >Entreprise/artisan :</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{leakage_company}}"></div></div>
            </div>
            <div class="w-1/3  w-50">
              <div class="flex mb-1 "><label class="col-form-label" >Frais réglés par</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{leakage_payment}}"  ></div></div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-1/3">
              <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">La cause a été identifiée :</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if origin_found}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless origin_found}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
            </div>
            <div class="w-1/3">
              <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">La fuite a été réparée :</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#if repaired}}checked="checked"{{/if}} value="true"  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div><div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless repaired}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
            </div>
            <div class="w-1/3">
              <div class="flex mb-1 "><label class="col-form-label text-right" >Dégâts situés chez</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{responsibility}}"  ></div></div>
            </div>
          </div>

          <div class="flex mb-2 gap-4 flex-wrap">
            <label class="col-form-label pt-0 whitespace-nowrap check_boxes ">La fuite a été causée par :</label>
<!--            <div class="flex px-2 gap-4">-->
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Fuite sur canalisation" {{#if pipe}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Fuite sur canalisation</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Fuite ou débordement d'appareils à effet d'eau" {{#if overflow}}checked="checked"{{/if}}  id="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_dappareils_à_effet_deau"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_dappareils_à_effet_deau">Fuite ou débordement d'appareils à effet d'eau</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Fuite ou débordement de chéneaux ou de gouttières" {{#if gutter}}checked="checked"{{/if}}  id="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_de_chéneaux_ou_de_gouttières"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_leakage_cause_fuite_ou_débordement_de_chéneaux_ou_de_gouttières">Fuite ou débordement de chéneaux ou de gouttières</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Infiltrations" {{#if ingress}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Infiltrations</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Gel" {{#if ice}}checked="checked"{{/if}} ><label class="whitespace-nowrap collection_check_boxes" >Gel</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Autre cause"  {{#if other_cause}}checked="checked"{{/if}}><label class="whitespace-nowrap collection_check_boxes" >Autre</label></div>
<!--            </div>-->
          </div>
          <div class="">
            <div class="flex mb-1 "><label class="col-form-label" >Si autre, précisez:</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{other_cause}}"  ></div></div>
          </div>
          <div class="form-group flex">
            <label class="col-form-label pt-0 mr-3">Si fuite sur canalisation, précisez:</label>
            <div class="flex items-center mb-1 check_boxes  mr-5"><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Commune" {{#if common_pipe}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Commune</label></div><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Particulier" {{#if private_pipe}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Particulier</label></div></div></div>
            <div class="flex items-center mb-1 check_boxes  mr-5"><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="Alimentation" {{#if supply}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Alimentation</label></div><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#if evacuation}}checked="checked"{{/if}} value="Evacuation"  ><label class="whitespace-nowrap collection_check_boxes" >Evacuation</label></div></div></div>
            <div class="flex items-center mb-1 check_boxes  mr-5"><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#if accessible}}checked="checked"{{/if}} value="Accessible"  ><label class="whitespace-nowrap collection_check_boxes" >Accessible</label></div><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#if unaccessible}}checked="checked"{{/if}} value="Non-accessible"  id="-accessible"><label class="whitespace-nowrap collection_check_boxes" for="-accessible">Non-accessible</label></div></div></div>
          </div>
          <div class="">
            <div class="gap-4 flex items-center mb-1 check_boxes  ">
              <label class="col-form-label pt-0 whitespace-nowrap check_boxes ">Si infiltrations, précisez :</label>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#ifIncludes "Toiture" infiltrations}}checked="checked"{{/ifIncludes}} value="Toiture"  ><label class="whitespace-nowrap collection_check_boxes" >Toiture</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#ifIncludes "Façade" infiltrations}}checked="checked"{{/ifIncludes}} value="Façade"  id="joint_reports_water_damage_infiltrations_façade"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_façade">Façade</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#ifIncludes "Fenêtre ou porte-fenêtre" infiltrations}}checked="checked"{{/ifIncludes}} value="Fenêtre ou porte-fenêtre"  id="joint_reports_water_damage_infiltrations_fenêtre_ou_porte-fenêtre"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_fenêtre_ou_porte-fenêtre">Fenêtre ou porte-fenêtre</label></div>
              <div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" {{#ifIncludes "Joint d'étanchéité (sanitaire ou carrelage)" infiltrations}}checked="checked"{{/ifIncludes}} value="Joint d'étanchéité (sanitaire ou carrelage)"  id="joint_reports_water_damage_infiltrations_joint_détanchéité_sanitaire_ou_carrelage"><label class="whitespace-nowrap collection_check_boxes" for="joint_reports_water_damage_infiltrations_joint_détanchéité_sanitaire_ou_carrelage">Joint d'étanchéité (sanitaire ou carrelage)</label></div>
            </div>
          </div>
          <div class="flex items-center mb-1 check_boxes  "><label class="col-form-label pt-0 whitespace-nowrap check_boxes ">Un entrepreneur, un installateur ou un vendeur vous paraît-il être à l'origine du sinistre?</label><div class="px-2 flex gap-4"><input type="hidden"  value=""><div class="flex items-center"><input class="form-check-input check_boxes " type="checkbox" value="true" {{#if craftman_responsibility}}checked="checked"{{/if}}  ><label class="whitespace-nowrap collection_check_boxes" >Oui</label></div>
          <div class="flex items-center"><input class="form-check-input check_boxes " readonly="readonly" type="checkbox" value="false" {{#unless craftman_responsibility}}checked="checked"{{/unless}}  ><label class="whitespace-nowrap collection_check_boxes" >Non</label></div></div></div>
          <div class="mb-4 ">
            <div class="w-full">
              <div class="flex mb-1 "><label class="col-form-label" >Précisez pourquoi :</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{craftman_reason}}"  ></div></div>
            </div>
            <div class="w-2/3">
              <div class="flex mb-1 "><label class="col-form-label" >Nom de l'entrepreneur</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{craftman_name}}"></div></div>
            </div>
            <div class="w-2/3">
              <div class="flex mb-1 "><label class="col-form-label" >Adresse de l'entrepreneur</label><div class="flex items-end flex-grow"><input class="form-control" type="text" value="{{craftman_address}}"></div></div>
            </div>
          </div>
        </div>
      </div>
  </form>
    <div class="flex mt-5">
        <div class="w-1/2">
          <div class="flex mb-3">
            <label class="col-form-label pl-0 pr-3 whitespace-nowrap">Fait à :</label>
            <input type="text" value="{{signature_city}}">
          </div>
          <div class="flex">
            <label class="col-form-label pl-0 pr-3 whitespace-nowrap" >Le :</label>
            <input type="text" value="Le {{signature_date}}">
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
      <div class="text-center mt-4 mx-auto absolute bottom-4 right-12">
        <img width="80" src="https://res.cloudinary.com/lyanne/image/upload/v1647812636/lyanne-static-assets/images/logo.svg">
      </div>
    </div>
  </body>
</html>
`;

export const waterDamageTemplate: any = (context: any) => {
  return handlebars.compile(html)(context);
};

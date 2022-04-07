/**
 * This function takes a Report fields object and maps a few values for easier use in the template
 * It then returns a modified object
 * @param {Object} report - The Report object with fields from the filled form
 * @returns {Object<any>} the same Report object with some added fields
 */

const mapReportFields = (report) => {
    report.house = report.building_type === 'Maison particulière';
    report.condoBuilding = report.building_type === 'Immeuble en copropriété';
    report.rentalBuilding = report.building_type === 'Immeuble locatif';
    report.recent_building = report.recent_building === 'OUI';
    report.leakage_test = report.leakage_test === 'OUI';
    report.origin_found = report.origin_found === 'OUI';
    report.repaired = report.repaired === 'OUI';
    report.pipe = report.leakage_cause === 'Fuite sur canalisation';
    report.overflow = report.leakage_cause === "Fuite ou débordement d'appareils à effet d'eau";
    report.gutter = report.leakage_cause === "Fuite ou débordement de chéneaux ou de gouttières";
    report.ingress = report.leakage_cause === "Infiltrations";
    report.other_cause = report.leakage_cause === "Autre cause";
    report.common_pipe = report.pipe_owner === "Commune";
    report.private_pipe = report.pipe_owner === "Particulier";
    report.supply = report.pipe_role === "Alimentation";
    report.evacuation = report.pipe_role === "Evacuation";
    report.accessible = report.pipe_accessibility === "Evacuation";
    report.unaccessible = report.pipe_accessibility === "Evacuation";
    report.craftman_responsibility = report.craftman_responsibility === 'OUI';
    report.craftman_reason = report.craftman_reason === 'OUI';
    report.termination_a = report.termination_a === 'OUI';
    report.seasonal_furnished_a = report.seasonal_furnished_a === 'OUI';
    report.home_usage_a = report.home_usage_a === 'OUI';
    report.damage_a = report.damage_a === 'OUI';
    report.owner_occupant_a = report.owner_occupant_a === 'OUI';
    report.owner_a = report.category_a === 'Propriétaire / Copropriétaire';
    report.manager_a = report.category_a === "Gérant de l'immeuble";
    report.syndic_a = report.category_a === "Syndic";
    report.renter_a = report.category_a === "Locataire ou occupant non propriétaire";
    report.termination_b = report.termination_b === 'OUI';
    report.seasonal_furnished_b = report.seasonal_furnished_b === 'OUI';
    report.home_usage_b = report.home_usage_b === 'OUI';
    report.damage_b = report.damage_b === 'OUI';
    report.owner_occupant_b = report.owner_occupant_b === 'OUI';
    report.owner_b = report.category_b === 'Propriétaire / Copropriétaire';
    report.manager_b = report.category_b === "Gérant de l'immeuble";
    report.syndic_b = report.category_b === "Syndic";
    report.renter_b = report.category_b === "Locataire ou occupant non propriétaire";
    report.infiltrations = report.infiltrations.split(", ");
    console.log(report);
    return report;
}

export default mapReportFields;
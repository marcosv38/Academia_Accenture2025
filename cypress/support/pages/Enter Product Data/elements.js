const optionalProducts = ["#EuroProtection","#LegalDefenseInsurance"]

export const elements = {
    INPUT_START_DATE: '#startdate',
    SELECT_INSURANCE: '#insurancesum',
    SELECT_MERIT: '#meritrating',
    SELECT_DAMAGE: '#damageinsurance',
    CHECKBOX_OPTIONS_DAMAGE: Cypress._.sample(optionalProducts),
    SELECT_COURTES: '#courtesycar',
    INPUT_NEXT: '#nextselectpriceoption',
    INPUT_PREVIOUS: '#preventerinsurancedata'
}
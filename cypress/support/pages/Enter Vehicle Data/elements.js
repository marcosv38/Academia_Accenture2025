const hand = ['#righthanddriveyes', '#righthanddriveno'];

export const elements = {
    SELECT_MAKE: 'select[name="Make"]',
    INPUT_PERFORMANCE: '#engineperformance',
    INPUT_MANUFACTURE: '#dateofmanufacture',
    SELECT_NUMBERSEATS: '#numberofseats',
    SELECT_NUMBERSEATS_MOTORCYCLE: '#numberofseatsmotorcycle',
    SELECT_FUEL: '#fuel',
    INPUT_PRICE: '#listprice',
    INPUT_PLATE: '#licenseplatenumber',
    INPUT_MILEAGE: '#annualmileage',
    INPUT_PAYLOAD: '#payload',
    INPUT_TOTAL_WEIGHT: '#totalweight',
    SELECT_MODEL: '#model',
    INPUT_CYLINDERS: '#cylindercapacity',
    RADIO_HAND: Cypress._.sample(hand),
    BUTTON_NEXT: '#nextenterinsurantdata',
    LABEL_VEHICE_TYPE: '#selectedinsurance',
    SPAN_COUNTER_FILDS: '#entervehicledata'
}
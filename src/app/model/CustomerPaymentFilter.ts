export default class CustomerPaymentFilter {
    searchCustomer: string;
    Date: string;
    // endDate: string;
    minAmount: number | null;
    maxAmount: number | null;

    constructor(
        searchCustomer: string,
        Date: string,
        minAmount: number | null,
        maxAmount: number | null
    ) {
        this.searchCustomer = searchCustomer;
        this.Date = Date;
        this.minAmount = minAmount;
        this.maxAmount = maxAmount;
    }
}

export interface fund
{
    mutualFundName : string;
    mutualFundUnits: number;
}
export interface stock 
{
    stockName : string;
    stockCount : number;
}
export interface asset
{
    portFolioId : number;
    mutualFundList : any;
    stockList : any;
}
export interface funddisplay
{
    mutualFundId : any;
    mutualFundName : any;
    mutualFundValue: any;
}
export interface stockdisplay
{
    stockId: any;
    stockName : any;
    stockValue : any;
}
export interface total
{
    total : number;
}
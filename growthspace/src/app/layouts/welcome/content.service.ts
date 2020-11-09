import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  svgLocation = '/assets/svg';
  content = {
    title: 'Welcome!!',
    describe: `Tell us who you are and what you'd like to achieve, and we'll do our best to create an outstanding coaching experience for you`,
    selectionHeader: 'I’m in :',
    organizationTxt: 'Years with the organization',
    // tslint:disable-next-line: max-line-length
    amountOfYears: [{active: -1, txt: '1-3'}, {active: -1, txt: '4-6'}, {active: -1, txt: '7-10'}, {active: -1, txt: '11-20'}, {active: -1, txt: '20+'}],
    // tslint:disable-next-line: max-line-length
    amountOfEmployees: [ {active: -1, txt: '0'}, {active: -1, txt: '1-3'}, {active: -1, txt: '4-10'}, {active: -1, txt: '11-30'}, {active: -1, txt: '30-100'}],
    employeesTxt: 'Number of employees under my direct managment',
    phoneNumerTxt: 'Phone number (optional)',
    phoneNumerPlaceHolder: '+972 555 555 555',
    submitBtnTxt: 'Next'

  }

  selectionBox = [
    {occupationCode: 111, titleName: `R&D/ Engineering`, svgSrc: `${this.svgLocation}/rnd.svg` , svgSrcRed: `${this.svgLocation}/rndR.svg`, active: -1},
    {occupationCode: 222, titleName: 'IT', svgSrc: `${this.svgLocation}/it.svg` , svgSrcRed: `${this.svgLocation}/itR.svg`, active: -1},
    {occupationCode: 333, titleName: 'Sales', svgSrc: `${this.svgLocation}/sales.svg` , svgSrcRed: `${this.svgLocation}/salesR.svg`, active: -1},
    {occupationCode: 444, titleName: 'Marketing', svgSrc: `${this.svgLocation}/marketing.svg` , svgSrcRed: `${this.svgLocation}/marketingR.svg`, active: -1},
    {occupationCode: 555, titleName: 'Operations', svgSrc: `${this.svgLocation}/operations.svg` , svgSrcRed: `${this.svgLocation}/operationsR.svg`, active: -1},
    {occupationCode: 666, titleName: 'Product UX/UI', svgSrc: `${this.svgLocation}/bd.svg` , svgSrcRed: `${this.svgLocation}/bdR.svg`, active: -1},
    {occupationCode: 777, titleName: 'HR', svgSrc: `${this.svgLocation}/hr.svg` , svgSrcRed: `${this.svgLocation}/hrR.svg`, active: -1},
    {occupationCode: 888, titleName: 'BD/Strategy', svgSrc: `${this.svgLocation}/bd.svg` , svgSrcRed: `${this.svgLocation}/bdR.svg`, active: -1},
    {occupationCode: 999, titleName: 'Finance', svgSrc: `${this.svgLocation}/finance.svg` , svgSrcRed: `${this.svgLocation}/financeR.svg`, active: -1},
    {occupationCode: 1111, titleName: 'Other', svgSrc: `${this.svgLocation}/other.svg` , svgSrcRed: `${this.svgLocation}/otherR.svg`, active: -1},
  ];
}

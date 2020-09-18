import{LcommandeMag} from './lcommandemag';
export class CommandeMag {
    id :number;
    annee : number;
    numero : number;
    code_mag : number;
    lib_mag : string;
    date : any;
    libelle : String;
    totht : number;
    tottva : number;
    totttc : number;
    modepayement:string;
    mag:string;
    lcomms :Array<LcommandeMag> =[];
}
import{LcommandeMag} from '../model/lcommandemag';
export class CommandeMag {
    id :number;
    annee : number;
    numero : number;
    code_client : number;
    lib_client : string;
    date_comm : any;
    libelle : String;
    totht : number;
    tottva : number;
    totttc : number;
    modepayement:string;
    mag:string;
    lcomms :Array<LcommandeMag> =[];
}
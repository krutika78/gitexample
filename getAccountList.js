import { LightningElement, wire } from 'lwc';
import methodname from '@salesforce/apex/getAccList.methodname';
export default class GetAccountList extends LightningElement {
@wire(methodname)accounts;
handleSelect(event){
    console.log('###value:'+event.currentTarget.dataset.accountId);
    event.preventDefault();
    const selectEvent=new customEvent('accountselect',{
    detail: {accountId:event.currentTarget.dataset.accountId}
});
console.log('');
this.dispatchEvent(selectEvent);
console.log('');


  
}


}






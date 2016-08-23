/**
 * Created by user on 8/22/16.
 */

var phone1 = new GSM('Sony');
var phone2 = new GSM('Apple');

phone1.insertSimCard(0845324499);
phone2.insertSimCard(0833445566);

phone1.call(phone2,70);
phone1.call(phone2,30);

console.log('The information about last  incoming call of '+ phone2.getModel() + ' phone is '+phone2.printInfoForTheLastIncomingCall() + '.All outgoing calls are '+phone2.getOutgoingCallDuration()+' minutes long!' +
    'The total sum is :'+phone2.getSumForCalls()+'$');
console.log('The information about last  outgoing call of '+ phone1.getModel() + ' phone is '+phone1.printInfoForTheLastOutgoingCall()  + '.All outgoing calls are '+phone1.getOutgoingCallDuration()+' minutes long!' +
    'The total sum is :'+phone1.getSumForCalls()+'$');

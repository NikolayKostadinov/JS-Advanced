const {assert} = require('chai');
const {rgbToHexColor} = require('../rgb-to-hex');

describe('rgbToHexColor test suit',()=>{
   it('0,0,0 converts black', ()=>{
       assert.equal(rgbToHexColor(0,0,0),'#000000');
   }) ;

   it('255,255,255 converts white', ()=>{
       assert.equal(rgbToHexColor(255,255,255),'#FFFFFF');
   }) ;

   it('255,165,0 converts orange', ()=>{
       assert.equal(rgbToHexColor(255, 165, 0),'#FFA500');
   }) ;

   it('returns undefined for missing params', ()=>{
       assert.equal(rgbToHexColor(),undefined);
       assert.equal(rgbToHexColor(0),undefined);
       assert.equal(rgbToHexColor(0,0),undefined);
   }) ;

   it('returns undefined for out of lower bound', ()=>{
       assert.equal(rgbToHexColor(-1,0,0),undefined);
       assert.equal(rgbToHexColor(0,-1,0),undefined);
       assert.equal(rgbToHexColor(0,0,-1),undefined);
   }) ;

   it('returns undefined for out of upper bound', ()=>{
       assert.equal(rgbToHexColor(256,0,0),undefined);
       assert.equal(rgbToHexColor(0,256,0),undefined);
       assert.equal(rgbToHexColor(0,0,256),undefined);
   }) ;

   it('returns undefined for NaN', ()=>{
       assert.equal(rgbToHexColor('a',0,0),undefined);
       assert.equal(rgbToHexColor(0,'a',0),undefined);
       assert.equal(rgbToHexColor(0,0,'a'),undefined);
   }) ;
});

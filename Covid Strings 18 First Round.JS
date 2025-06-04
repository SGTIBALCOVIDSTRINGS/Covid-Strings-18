doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings18 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3 =first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings18 includes seeding 
html
head
utf8
viewportcontent=width=device-width,initial-scale=one
title covid strings18 first round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings18 first round.js
first round=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed,  third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed =seed1
second highest seed=seed2
third highest seed=seed3
firstmiddleseed=seed4
second middle seed =seed5
third lowest seed=seed6
second lowest seed=seed7
lowest overall seed=seed8
covidstringsteamlist18=[blue,indigo,purple,black,orange,red,turquoise,burgundy]
<header.html>
matchups 
for first round there are 8 teams which equals 4 matchups 
matchup1=(red versus purple)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html=[matchup]
rounddiv.appendchild(matchup)
matchup2=(burgundy versus blue)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html=[matchup]
rounddiv.appendchild(matchup)
matchup3=(orange versus black)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html=[matchup]
rounddiv.appendchild(matchup)
matchup4=(turquoise versus indigo)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html=[matchup]
rounddiv.appendchild(matchup)
for (i in covid strings first round)
round div=create element
round div class name=covid strings18 first round
bracket.appendchild(round div)
if(event.target.covid strings seed list.contains(matchup))
event.target.covid strings seed list.toggle
else:
create matchup
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=questions[1-15]
collections.shuffle(arrays.aslist(questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
if selectedanswer==correct:
return true
else:
return false
if selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name}doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteam=slice(current teams)
<subheading.html>
result for matchup1 
the code for how to determine the end result of matchup1 of covid strings 
result=declarewinner(matchup1)
if  purple score>=forty:
console.log(purple brave hearts win)
else:
remain
if red score>=forty:
console.log(red protein spikers win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result=declarewinner(matchup2)
if blue score>=forty:
console.log(blue curve crushers win)
else:
remain
if burgundy score>=forty:
console.log(burgundy rebuilders win)
else:
remain
<subheading.html>
result for matchup3 
the code for how to determine the end result of matchup3 of covid strings 
result=declarewinner(matchup3)
if black score>=forty:
console.log(black night riders win)
else:
remain
if orange score>=forty:
console.log(orange rna messengers win)
else:
remain
<subheading.html>
result for matchup4
the code for how to determine the end result of matchup4 of covid strings 
result=declarewinner(matchup4)
if indigo score>=forty:
console.log(indigo isos win)
else:
remain
if turquoise score>=forty:
console.log(turquoise waves win)
else:
remain
return filename

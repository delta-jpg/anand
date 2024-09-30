const speedlimit = 80;
const exceed = 5;
const revoke = 5;
let Number = prompt("speed");
let pointloss = 0;
if (pointloss >= revoke) {
  pointloss = Number - speedlimit;
  pointloss = pointloss / 5;
  alert(pointloss + " points lost, license revoked");
} else {
  alert(pointloss + " points lost, license isn't revoked");
}

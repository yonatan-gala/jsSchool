// AVATAR
// user level associated avatars

var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

// getting current avatar by points
function getAvatar(points) {
var level = points / pointsPerLevel;
// first condition: if points divided by points per level is zero
// basically it means user has no points at all, applys only when 0 is set in points.
if (level == 0) { return "Teddy bear";
// here we are setting the levels
//its an else if beacause these are specified use cases.
//mabye a switch case is better here.
} else if (level == 1) { return "Cat";
} else if (level >= 2) {
return "Gorilla"; }
}

// update points which can result in a new level/avatar.
function updatePoints(bonus, newPoints) {
    var i = 0;
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i++;
    }
    return newPoints + userPoints;
}
userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);

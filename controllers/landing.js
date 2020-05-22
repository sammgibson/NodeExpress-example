
exports.getLanding = function(req, res, next){
    res.render('landing', {title:'SMGBLOG'});
}

exports.submitLead = function(req, res, next){
    console.log("lead email:", req.body.lead_email);
    res.redirect('/');
}
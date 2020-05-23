
const models = require('../models');

exports.getLanding = function(req, res, next){
    res.render('landing', {title:'SMGBLOG'});
}

exports.submitLead = function(req, res, next){
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead =>{
        res.redirect('/leads');
    })
}

exports.show_leads = function(req, res, next){
    models.Lead.findAll().then(leads => {
        res.render('landing', {title: 'Express', leads: leads });
    })
}
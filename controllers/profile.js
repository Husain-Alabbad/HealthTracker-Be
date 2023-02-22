// Require Profile model
const Profile = require('../models/Profile');

// Require Moment
const moment = require('moment');

// Require User model for populating
const User = require('../models/User');

// Require Record model for populating
const Record = require('../models/Record');

// HTTP GET API for displaying the profile
exports.profile_index_get = (req, res) => {
    Profile.find()
    .populate("user")
    .populate("record")
    .then((profiles) => {
        res.json({ profiles: profiles })
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP GET API for creating a profile
exports.profile_create_get = (req, res) => {
    Profile.exists({ user: req.user._id },
        function(profile, error) {
            if(!Profile) {
                console.log(error);
            }
            else {
                console.log(profile);
                if(profile === null) {
                    console.log("Create a new user profile");
                    res.json({ profile });
                }
                else {
                    console.log("user with profile already exists");
                    res.json({ profile });
                }
            }
        }
    );
};


// HTTP POST API for creating profile
exports.profile_create_post = (req, res) => {
    console.log(req.body);
    let profile = new Profile(req.body);
    profile.save()
    .then((profiles) => {
        res.json({ profiles })
        console.log("profiles: ", profiles);
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
};

// HTTP GET API for loading the profile edit form
exports.profile_edit_get = (req, res) => {
    Profile.findById(req.query._id)
    // .populate("user")

    .then(profile => {

        res.json({ profile });
    })
    .catch(err => {
        console.log(err);
    })
};


// HTTP PUT API for updating the profile
exports.profile_update_put = (req, res) => {
    console.log(req.body._id);
    Profile.findByIdAndUpdate(req.body._id, req.body,{new:true})
    .then((profile) => {
        res.json({profile})
    })
    .catch(err => {
        console.log(err)
    });
};

// HTTP DELETE API for deleting the profile
exports.profile_delete_get = (req, res) => {
    console.log(req.query._id);
    Profile.findByIdAndDelete(req.query._id)
    .then((profile)=>{

        res.json({profile})
    })
    .catch(err => {
        console.log(err);
    })
}


const { Dimensions } = require("react-native");

const appColor ={
    colorPrimary:"red",
    backgroundPrimary:"#391817",
    whitesmoke:"whitesmoke",
    white:"white",
    grey:"grey",
    gold:"gold"
};



exports.dimWidth = Dimensions.get('window').width;
exports.dimHeight = Dimensions.get('window').height;

exports.appColor=appColor;
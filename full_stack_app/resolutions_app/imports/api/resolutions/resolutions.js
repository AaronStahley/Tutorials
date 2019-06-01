import { Mongo } from "meteor/mongo";

//Sets up new MongoDb called resolutions
const Resolutions = new Mongo.Collection("resolutions");

export default Resolutions;

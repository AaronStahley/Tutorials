import { Mongo } from "meteor/mongo";

//Sets up new MongoDb called resolutions
const Goals = new Mongo.Collection("goals");

export default Goals;

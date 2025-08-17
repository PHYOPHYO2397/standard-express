/*
users[icon:users]{
  id ObjectId pk
  username string
  email string
  password string
  profile_photo string
  cover_photo string
  refresh_token string
  posts ObjectId[] posts
}
*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from bcrypt;
//create Scheme
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      type: String,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);


userSchema.pre('save',async function(next){
          if(!this.isModified("password")) return next()
          this.password=bcrypt.hash(this.password,10);
          next();

})

userSchema.methods.isPasswordMatch(async function(password){

          return await bcrypt.compare(password,this.password)

});
userSchema.plugin(mongooseAggregatePaginate);
//Export to be able to use from other schema
export const User = mongoose.model("User", userSchema);

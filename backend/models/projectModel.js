import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  projectCode: {
    type: String,
    unique: true,
    required: true,
  },
  location: String,
  bowheer: String,
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

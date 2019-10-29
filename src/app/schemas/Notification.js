import moongose from 'mongoose';

const NotificationSchema = new moongose.Schema(
  {
    content: {
      type: String,
      require: true
    },
    user: {
      type: Number,
      required: true
    },
    read: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default moongose.model('Notification', NotificationSchema);

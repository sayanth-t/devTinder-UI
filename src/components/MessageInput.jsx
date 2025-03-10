import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage } from '../utils/messageSlice';
import { connectSocket } from '../utils/socket';
import { useEffect } from 'react';


// import lucid icons
import { Image, Send , X } from 'lucide-react';

const MessageInput = () => {
  const [ text , setText ] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const selectedUser = useSelector((state) => state.selectedUser);

  const dispatch = useDispatch();

  useEffect(() => {
      const socket = connectSocket();
      socket.on('newMessage', (message) => {
        if (message) {
          console.log("new message -- " , message );
        }
  
     
      });
    }, []);

  //for sending message
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/message/send/' + selectedUser._id,
        { text , imagePreview },
        { withCredentials: true }
      );
      console.log('after sending -- ', res.data.message.text);
      dispatch(addNewMessage(res.data.message));
      setText('');
      setImagePreview(null) 
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleImageChange = (e) => {
    try {
      const file = e.target.files[0];

      const reader = new FileReader()  ;
      reader.onloadend = () => {
        setImagePreview(reader.result) ;
      }
      reader.readAsDataURL(file);

    } catch (err) {
        console.log(err.message)
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null) ;
  };

  return (
    <div onSubmit={sendMessage} className="p-4 w-full ">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
                onClick={handleRemoveImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
                <X className='size-2'/>
            </button>
          </div>
        </div>
      )}

      <form className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageUpload"
            onChange={handleImageChange} // Removed () to avoid immediate execution
          />

          {/* Button to Trigger File Input */}
          <label
            htmlFor="imageUpload"
            className="cursor-pointer hidden sm:flex btn btn-circle"
          >
            <Image
              className={imagePreview ? 'text-emerald-500' : 'text-zinc-400'}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

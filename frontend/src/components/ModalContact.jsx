import CloseIcon from '@mui/icons-material/Close';

const ModalContact = ({open, onClose, children}) => {


  return (
    <div onClick={onClose} className={`fixed inset-0 z-30 flex justify-center items-center transition-colors ${open ? "backdrop-blur-sm visible bg-black/20" : "invisible"}`}>
      <div onClick={e => e.stopPropagation()} className={`bg-white rounded-2xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray hover:bg-yellow-300">
          <CloseIcon/>
        </button>

        {children}
      </div>
    </div>
  )
}

export default ModalContact
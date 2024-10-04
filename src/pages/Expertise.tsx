import { motion } from 'framer-motion';
import qr from '../assets/qr.jpg'
import acb from "../assets/images.png"
const Expertise = () => {
    const handleOpenModal = (id: string) => {
        if (document) {
            let a: any = document?.getElementById(id)
            a?.showModal()
        }

    }
    return (
        <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1
                }
            }}
            className='flex flex-col gap-5 w-full'>


            {/* Open the modal using document.getElementById('ID').showModal() method */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className='flex  w-full items-center justify-center gap-3'>

                <div>
                    <button className="btn" onClick={() => handleOpenModal('modal4')}>

                        <img src={acb} className='h-5 rounded-xl' />
                        Donate Qua ACB
                    </button>
                    <dialog id="modal4" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='flex flex-col'>
                                <h3 className="font-bold text-lg">Quét mã QR </h3>
                                <img className="py-4 aspect-square rounded-md" src={qr} />
                            </div>
                        </div>

                    </dialog>
                </div>
            </div>

        </motion.div>
    );
};

export default Expertise;
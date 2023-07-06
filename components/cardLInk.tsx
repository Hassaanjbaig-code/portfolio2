import Link from "next/link"

const cardLInk = ({ link= null } ) => {
  return (
    <>
        {
            link && <Link href={link}></Link>
        }
    </>
  )
}

export default cardLInk
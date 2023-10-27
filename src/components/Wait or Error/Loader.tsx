import { BiLoaderCircle } from 'react-icons/bi'

export const Loader = () => {
    return(
        <div className="loader">
                    <BiLoaderCircle className="loadingIcon" />
                    <span>Loading</span>
        </div>
    )
}
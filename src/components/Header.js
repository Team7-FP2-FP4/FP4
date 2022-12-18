const Header = (props) => {
    return (
        <div className='heading-title flex flex-row'>
            <h1 class=" mt-8 mb-4 font-karla text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {props.title}
            </h1>
        </div>
    );
}

export default Header
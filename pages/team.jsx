
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Team
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/J69KSqvGeq">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/997187785154908311/1015836301037142118/Man_PP_Gif_15.gif" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Founder</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        iqo#9999
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/J69KSqvGeq">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/997188225040928799/1015898018391793664/tokyo-ghoul-anime.gif" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Founder</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Hex#8888
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};

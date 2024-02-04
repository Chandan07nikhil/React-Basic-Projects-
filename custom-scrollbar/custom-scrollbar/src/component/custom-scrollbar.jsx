import { useEffect, useState } from "react";


export default function CustomScrollBar({ url }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);


    async function fetchData(getUrl) {
        setLoading(true);

        try {
            const response = await fetch(getUrl);
            const data = await response.json();

            // console.log(data);

            if (data && data.products && data.products.length) {
                setProducts(data.products);
                setLoading(false);
            }

        }
        catch (e) {
            console.log(e);
            setErrorMsg(e.message);
            setLoading(false);
        }

    }

    useEffect(() => {

        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        // console.log(document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight);

        const scrolledValue = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((scrolledValue / height) * 100);
    }


    useEffect(() => {

        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.addEventListener('scroll', () => { });
        }
    }, [])

    if (loading) return <div className="text-center">Product is loading ! Please Wait</div>

    if (errorMsg) return <div>Error ! {errorMsg}</div>

    //   console.log(products);

    return (
        <div className="w-full h-[100vh] flex flex-col items-center">
            <div className="w-[100%] top-0 fixed text-center z-10 bg-slate-400">
                <h1 className="text-2xl font-bold text-white p-5">Custom Scrollbar Indicator</h1>
                <div className="w-[100%] h-3 bg-green-300">
                    <div className='w-0 h-3 bg-green-700'
                        style={{ width: `${scrollPercentage}%` }}>
                    </div>
                </div>
            </div>

            <div className="mt-[100px]">
                {
                    products && products.length > 0 ?
                        products.map((product) => {
                            return <div className="m-1" key={product.id}>{product.title}</div>
                        })
                        : null
                }
            </div>
        </div>
    );
}
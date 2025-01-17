import { useLayoutEffect, useRef } from "react";
import { TinyColumn } from "@antv/g2plot";


const DemoTinyColumn = () => {
    const container = useRef(null)

    useLayoutEffect(() => {
        const data = [50, 40, 81, 400, 300, 219, 269];
        
        const tinyColumn = new TinyColumn(container.current!, {
             height: 50,
             autoFit: true,
             data,
             tooltip: {
                customContent: function(x, data) {
                   return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`
                }
             }

        })
        tinyColumn.render()

        return () => {
            tinyColumn.destroy()
        }
    }, [])

    return (
        <div className="w-full" ref={container}></div>
    )
}
export default DemoTinyColumn;
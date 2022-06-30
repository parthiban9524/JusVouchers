import React from "react";
import { View, Text,Image } from "react-native"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { normalize } from "./Utils";
import {sale1} from "./Utils"

export default function GraphOrderCancel() {
    return (

        <View style={{ alignSelf: "center", marginTop: normalize(40), elevation: normalize(5), shadowColor: "#000000", backgroundColor : "white", borderRadius : normalize(10) }}>
                <View style={{flexDirection:"row", justifyContent:'space-between'}}><Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: "black",  marginLeft : normalize(10), marginTop : normalize(10) }}>Order Cancel</Text>
                       <Text style={{ fontSize: normalize(18), fontWeight: 'bold', color: "black",  marginRight : normalize(10), marginTop : normalize(10) }} >01 May-31 May </Text></View> 
            <LineChart
                data={{
                    labels: ["Jan", "Feb", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [4,2.1,4,3.7,8]
                        }
                    ]
                }}
                width={normalize(320)}
                height={normalize(350)}
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#fb8c00",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => "#819CFF",
                    labelColor: (opacity = 1) => "#819CFF",
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#F58220"
                    }
                }}
                bezier
                fromZero={true}
                style={{
                    marginVertical: 15,
                    borderRadius: 16,
                }}
            />
        </View>
    )

}
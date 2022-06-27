import React from "react";
import { View, Text } from "react-native"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { normalize } from "./Utils";

export default function Graph() {
    return (
        <View style={{ alignSelf: "center", marginTop: normalize(40), elevation: normalize(5), shadowColor: "#000000" }}>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [4.3, 4.8, 7, 9]
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
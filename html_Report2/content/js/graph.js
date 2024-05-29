/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 503.0, "minX": 0.0, "maxY": 9477.0, "series": [{"data": [[0.0, 503.0], [0.1, 503.0], [0.2, 515.0], [0.3, 522.0], [0.4, 556.0], [0.5, 557.0], [0.6, 559.0], [0.7, 573.0], [0.8, 584.0], [0.9, 601.0], [1.0, 601.0], [1.1, 606.0], [1.2, 628.0], [1.3, 640.0], [1.4, 653.0], [1.5, 653.0], [1.6, 659.0], [1.7, 663.0], [1.8, 665.0], [1.9, 666.0], [2.0, 666.0], [2.1, 668.0], [2.2, 669.0], [2.3, 673.0], [2.4, 677.0], [2.5, 681.0], [2.6, 692.0], [2.7, 695.0], [2.8, 695.0], [2.9, 697.0], [3.0, 697.0], [3.1, 705.0], [3.2, 707.0], [3.3, 707.0], [3.4, 708.0], [3.5, 708.0], [3.6, 708.0], [3.7, 708.0], [3.8, 709.0], [3.9, 710.0], [4.0, 710.0], [4.1, 712.0], [4.2, 717.0], [4.3, 717.0], [4.4, 720.0], [4.5, 721.0], [4.6, 722.0], [4.7, 722.0], [4.8, 724.0], [4.9, 724.0], [5.0, 725.0], [5.1, 725.0], [5.2, 725.0], [5.3, 725.0], [5.4, 727.0], [5.5, 728.0], [5.6, 729.0], [5.7, 731.0], [5.8, 732.0], [5.9, 732.0], [6.0, 734.0], [6.1, 734.0], [6.2, 734.0], [6.3, 735.0], [6.4, 735.0], [6.5, 737.0], [6.6, 741.0], [6.7, 742.0], [6.8, 743.0], [6.9, 744.0], [7.0, 745.0], [7.1, 745.0], [7.2, 748.0], [7.3, 748.0], [7.4, 749.0], [7.5, 749.0], [7.6, 749.0], [7.7, 751.0], [7.8, 751.0], [7.9, 752.0], [8.0, 752.0], [8.1, 752.0], [8.2, 752.0], [8.3, 755.0], [8.4, 756.0], [8.5, 757.0], [8.6, 758.0], [8.7, 758.0], [8.8, 759.0], [8.9, 760.0], [9.0, 760.0], [9.1, 760.0], [9.2, 762.0], [9.3, 762.0], [9.4, 762.0], [9.5, 764.0], [9.6, 764.0], [9.7, 765.0], [9.8, 766.0], [9.9, 767.0], [10.0, 769.0], [10.1, 769.0], [10.2, 770.0], [10.3, 770.0], [10.4, 771.0], [10.5, 772.0], [10.6, 773.0], [10.7, 775.0], [10.8, 775.0], [10.9, 776.0], [11.0, 776.0], [11.1, 776.0], [11.2, 776.0], [11.3, 777.0], [11.4, 779.0], [11.5, 780.0], [11.6, 781.0], [11.7, 783.0], [11.8, 783.0], [11.9, 784.0], [12.0, 785.0], [12.1, 785.0], [12.2, 786.0], [12.3, 787.0], [12.4, 787.0], [12.5, 788.0], [12.6, 788.0], [12.7, 789.0], [12.8, 791.0], [12.9, 792.0], [13.0, 794.0], [13.1, 794.0], [13.2, 797.0], [13.3, 797.0], [13.4, 800.0], [13.5, 804.0], [13.6, 804.0], [13.7, 805.0], [13.8, 806.0], [13.9, 807.0], [14.0, 808.0], [14.1, 808.0], [14.2, 809.0], [14.3, 810.0], [14.4, 811.0], [14.5, 812.0], [14.6, 813.0], [14.7, 821.0], [14.8, 822.0], [14.9, 823.0], [15.0, 825.0], [15.1, 825.0], [15.2, 828.0], [15.3, 829.0], [15.4, 835.0], [15.5, 835.0], [15.6, 835.0], [15.7, 839.0], [15.8, 842.0], [15.9, 844.0], [16.0, 845.0], [16.1, 845.0], [16.2, 848.0], [16.3, 850.0], [16.4, 858.0], [16.5, 860.0], [16.6, 862.0], [16.7, 862.0], [16.8, 866.0], [16.9, 867.0], [17.0, 868.0], [17.1, 868.0], [17.2, 876.0], [17.3, 880.0], [17.4, 892.0], [17.5, 896.0], [17.6, 900.0], [17.7, 901.0], [17.8, 904.0], [17.9, 907.0], [18.0, 912.0], [18.1, 912.0], [18.2, 913.0], [18.3, 920.0], [18.4, 930.0], [18.5, 933.0], [18.6, 936.0], [18.7, 936.0], [18.8, 939.0], [18.9, 941.0], [19.0, 942.0], [19.1, 942.0], [19.2, 944.0], [19.3, 947.0], [19.4, 948.0], [19.5, 954.0], [19.6, 954.0], [19.7, 959.0], [19.8, 960.0], [19.9, 961.0], [20.0, 968.0], [20.1, 968.0], [20.2, 969.0], [20.3, 976.0], [20.4, 977.0], [20.5, 983.0], [20.6, 988.0], [20.7, 990.0], [20.8, 994.0], [20.9, 996.0], [21.0, 1000.0], [21.1, 1000.0], [21.2, 1001.0], [21.3, 1002.0], [21.4, 1003.0], [21.5, 1010.0], [21.6, 1018.0], [21.7, 1021.0], [21.8, 1025.0], [21.9, 1026.0], [22.0, 1028.0], [22.1, 1028.0], [22.2, 1032.0], [22.3, 1038.0], [22.4, 1045.0], [22.5, 1049.0], [22.6, 1051.0], [22.7, 1052.0], [22.8, 1055.0], [22.9, 1056.0], [23.0, 1056.0], [23.1, 1056.0], [23.2, 1058.0], [23.3, 1062.0], [23.4, 1063.0], [23.5, 1064.0], [23.6, 1064.0], [23.7, 1068.0], [23.8, 1071.0], [23.9, 1072.0], [24.0, 1074.0], [24.1, 1074.0], [24.2, 1076.0], [24.3, 1079.0], [24.4, 1082.0], [24.5, 1085.0], [24.6, 1086.0], [24.7, 1086.0], [24.8, 1089.0], [24.9, 1091.0], [25.0, 1092.0], [25.1, 1092.0], [25.2, 1093.0], [25.3, 1093.0], [25.4, 1094.0], [25.5, 1096.0], [25.6, 1097.0], [25.7, 1098.0], [25.8, 1098.0], [25.9, 1100.0], [26.0, 1104.0], [26.1, 1104.0], [26.2, 1106.0], [26.3, 1107.0], [26.4, 1109.0], [26.5, 1114.0], [26.6, 1117.0], [26.7, 1118.0], [26.8, 1120.0], [26.9, 1121.0], [27.0, 1122.0], [27.1, 1122.0], [27.2, 1122.0], [27.3, 1123.0], [27.4, 1124.0], [27.5, 1131.0], [27.6, 1134.0], [27.7, 1138.0], [27.8, 1140.0], [27.9, 1143.0], [28.0, 1146.0], [28.1, 1146.0], [28.2, 1147.0], [28.3, 1147.0], [28.4, 1152.0], [28.5, 1154.0], [28.6, 1155.0], [28.7, 1155.0], [28.8, 1159.0], [28.9, 1159.0], [29.0, 1160.0], [29.1, 1160.0], [29.2, 1161.0], [29.3, 1163.0], [29.4, 1165.0], [29.5, 1166.0], [29.6, 1169.0], [29.7, 1170.0], [29.8, 1173.0], [29.9, 1177.0], [30.0, 1177.0], [30.1, 1177.0], [30.2, 1178.0], [30.3, 1178.0], [30.4, 1184.0], [30.5, 1184.0], [30.6, 1185.0], [30.7, 1186.0], [30.8, 1187.0], [30.9, 1190.0], [31.0, 1190.0], [31.1, 1190.0], [31.2, 1190.0], [31.3, 1193.0], [31.4, 1194.0], [31.5, 1200.0], [31.6, 1206.0], [31.7, 1209.0], [31.8, 1212.0], [31.9, 1212.0], [32.0, 1213.0], [32.1, 1213.0], [32.2, 1221.0], [32.3, 1223.0], [32.4, 1224.0], [32.5, 1229.0], [32.6, 1231.0], [32.7, 1240.0], [32.8, 1247.0], [32.9, 1248.0], [33.0, 1257.0], [33.1, 1257.0], [33.2, 1260.0], [33.3, 1267.0], [33.4, 1269.0], [33.5, 1271.0], [33.6, 1273.0], [33.7, 1276.0], [33.8, 1279.0], [33.9, 1281.0], [34.0, 1283.0], [34.1, 1283.0], [34.2, 1286.0], [34.3, 1296.0], [34.4, 1297.0], [34.5, 1299.0], [34.6, 1300.0], [34.7, 1308.0], [34.8, 1311.0], [34.9, 1316.0], [35.0, 1320.0], [35.1, 1320.0], [35.2, 1324.0], [35.3, 1329.0], [35.4, 1331.0], [35.5, 1335.0], [35.6, 1336.0], [35.7, 1345.0], [35.8, 1346.0], [35.9, 1347.0], [36.0, 1347.0], [36.1, 1349.0], [36.2, 1350.0], [36.3, 1353.0], [36.4, 1355.0], [36.5, 1356.0], [36.6, 1362.0], [36.7, 1362.0], [36.8, 1368.0], [36.9, 1370.0], [37.0, 1370.0], [37.1, 1371.0], [37.2, 1376.0], [37.3, 1377.0], [37.4, 1381.0], [37.5, 1383.0], [37.6, 1386.0], [37.7, 1396.0], [37.8, 1396.0], [37.9, 1396.0], [38.0, 1396.0], [38.1, 1397.0], [38.2, 1400.0], [38.3, 1406.0], [38.4, 1407.0], [38.5, 1408.0], [38.6, 1415.0], [38.7, 1417.0], [38.8, 1417.0], [38.9, 1417.0], [39.0, 1417.0], [39.1, 1418.0], [39.2, 1424.0], [39.3, 1427.0], [39.4, 1428.0], [39.5, 1433.0], [39.6, 1434.0], [39.7, 1434.0], [39.8, 1436.0], [39.9, 1440.0], [40.0, 1440.0], [40.1, 1449.0], [40.2, 1458.0], [40.3, 1459.0], [40.4, 1473.0], [40.5, 1473.0], [40.6, 1482.0], [40.7, 1483.0], [40.8, 1488.0], [40.9, 1493.0], [41.0, 1493.0], [41.1, 1493.0], [41.2, 1494.0], [41.3, 1495.0], [41.4, 1496.0], [41.5, 1497.0], [41.6, 1499.0], [41.7, 1499.0], [41.8, 1502.0], [41.9, 1503.0], [42.0, 1503.0], [42.1, 1507.0], [42.2, 1511.0], [42.3, 1512.0], [42.4, 1514.0], [42.5, 1515.0], [42.6, 1520.0], [42.7, 1520.0], [42.8, 1524.0], [42.9, 1525.0], [43.0, 1525.0], [43.1, 1531.0], [43.2, 1535.0], [43.3, 1541.0], [43.4, 1544.0], [43.5, 1546.0], [43.6, 1546.0], [43.7, 1561.0], [43.8, 1561.0], [43.9, 1565.0], [44.0, 1565.0], [44.1, 1566.0], [44.2, 1567.0], [44.3, 1570.0], [44.4, 1574.0], [44.5, 1575.0], [44.6, 1577.0], [44.7, 1585.0], [44.8, 1585.0], [44.9, 1586.0], [45.0, 1586.0], [45.1, 1586.0], [45.2, 1595.0], [45.3, 1597.0], [45.4, 1602.0], [45.5, 1603.0], [45.6, 1623.0], [45.7, 1624.0], [45.8, 1627.0], [45.9, 1630.0], [46.0, 1630.0], [46.1, 1638.0], [46.2, 1639.0], [46.3, 1643.0], [46.4, 1643.0], [46.5, 1645.0], [46.6, 1645.0], [46.7, 1647.0], [46.8, 1653.0], [46.9, 1663.0], [47.0, 1663.0], [47.1, 1667.0], [47.2, 1667.0], [47.3, 1677.0], [47.4, 1679.0], [47.5, 1680.0], [47.6, 1680.0], [47.7, 1680.0], [47.8, 1681.0], [47.9, 1683.0], [48.0, 1683.0], [48.1, 1693.0], [48.2, 1696.0], [48.3, 1703.0], [48.4, 1709.0], [48.5, 1710.0], [48.6, 1725.0], [48.7, 1738.0], [48.8, 1745.0], [48.9, 1749.0], [49.0, 1749.0], [49.1, 1749.0], [49.2, 1767.0], [49.3, 1775.0], [49.4, 1788.0], [49.5, 1790.0], [49.6, 1810.0], [49.7, 1812.0], [49.8, 1816.0], [49.9, 1820.0], [50.0, 1820.0], [50.1, 1824.0], [50.2, 1826.0], [50.3, 1834.0], [50.4, 1841.0], [50.5, 1852.0], [50.6, 1877.0], [50.7, 1884.0], [50.8, 1891.0], [50.9, 1912.0], [51.0, 1912.0], [51.1, 1922.0], [51.2, 1928.0], [51.3, 1942.0], [51.4, 1942.0], [51.5, 1943.0], [51.6, 1951.0], [51.7, 1952.0], [51.8, 1972.0], [51.9, 1977.0], [52.0, 1977.0], [52.1, 1995.0], [52.2, 2005.0], [52.3, 2007.0], [52.4, 2021.0], [52.5, 2024.0], [52.6, 2061.0], [52.7, 2063.0], [52.8, 2076.0], [52.9, 2131.0], [53.0, 2131.0], [53.1, 2139.0], [53.2, 2161.0], [53.3, 2166.0], [53.4, 2221.0], [53.5, 2251.0], [53.6, 2523.0], [53.7, 2530.0], [53.8, 2540.0], [53.9, 2565.0], [54.0, 2565.0], [54.1, 2569.0], [54.2, 2582.0], [54.3, 2582.0], [54.4, 2593.0], [54.5, 2594.0], [54.6, 2623.0], [54.7, 2626.0], [54.8, 2641.0], [54.9, 2653.0], [55.0, 2653.0], [55.1, 2657.0], [55.2, 2673.0], [55.3, 2696.0], [55.4, 2706.0], [55.5, 2736.0], [55.6, 2738.0], [55.7, 2739.0], [55.8, 2756.0], [55.9, 2780.0], [56.0, 2780.0], [56.1, 2811.0], [56.2, 2839.0], [56.3, 2878.0], [56.4, 2898.0], [56.5, 2947.0], [56.6, 2969.0], [56.7, 3035.0], [56.8, 3146.0], [56.9, 3148.0], [57.0, 3148.0], [57.1, 3289.0], [57.2, 3327.0], [57.3, 3338.0], [57.4, 3371.0], [57.5, 3407.0], [57.6, 3408.0], [57.7, 3476.0], [57.8, 3491.0], [57.9, 3499.0], [58.0, 3499.0], [58.1, 3506.0], [58.2, 3585.0], [58.3, 3648.0], [58.4, 3727.0], [58.5, 3832.0], [58.6, 3905.0], [58.7, 3922.0], [58.8, 3981.0], [58.9, 4031.0], [59.0, 4031.0], [59.1, 4044.0], [59.2, 4046.0], [59.3, 4050.0], [59.4, 4150.0], [59.5, 4169.0], [59.6, 4182.0], [59.7, 4204.0], [59.8, 4317.0], [59.9, 4437.0], [60.0, 4437.0], [60.1, 4529.0], [60.2, 4558.0], [60.3, 4615.0], [60.4, 4627.0], [60.5, 4630.0], [60.6, 4667.0], [60.7, 4676.0], [60.8, 4708.0], [60.9, 4783.0], [61.0, 4783.0], [61.1, 4788.0], [61.2, 4806.0], [61.3, 4844.0], [61.4, 4897.0], [61.5, 4930.0], [61.6, 5022.0], [61.7, 5080.0], [61.8, 5143.0], [61.9, 5145.0], [62.0, 5145.0], [62.1, 5153.0], [62.2, 5302.0], [62.3, 5328.0], [62.4, 5418.0], [62.5, 5438.0], [62.6, 5472.0], [62.7, 5501.0], [62.8, 5522.0], [62.9, 5528.0], [63.0, 5528.0], [63.1, 5554.0], [63.2, 5585.0], [63.3, 5608.0], [63.4, 5622.0], [63.5, 5624.0], [63.6, 5626.0], [63.7, 5630.0], [63.8, 5633.0], [63.9, 5643.0], [64.0, 5643.0], [64.1, 5666.0], [64.2, 5679.0], [64.3, 5697.0], [64.4, 5704.0], [64.5, 5712.0], [64.6, 5777.0], [64.7, 5785.0], [64.8, 5792.0], [64.9, 5823.0], [65.0, 5823.0], [65.1, 5832.0], [65.2, 5839.0], [65.3, 5868.0], [65.4, 5882.0], [65.5, 5895.0], [65.6, 5902.0], [65.7, 5921.0], [65.8, 5951.0], [65.9, 5960.0], [66.0, 5960.0], [66.1, 5992.0], [66.2, 6050.0], [66.3, 6052.0], [66.4, 6071.0], [66.5, 6073.0], [66.6, 6087.0], [66.7, 6093.0], [66.8, 6130.0], [66.9, 6138.0], [67.0, 6138.0], [67.1, 6161.0], [67.2, 6169.0], [67.3, 6246.0], [67.4, 6284.0], [67.5, 6323.0], [67.6, 6333.0], [67.7, 6339.0], [67.8, 6347.0], [67.9, 6377.0], [68.0, 6377.0], [68.1, 6385.0], [68.2, 6389.0], [68.3, 6396.0], [68.4, 6419.0], [68.5, 6437.0], [68.6, 6475.0], [68.7, 6486.0], [68.8, 6497.0], [68.9, 6524.0], [69.0, 6524.0], [69.1, 6540.0], [69.2, 6548.0], [69.3, 6554.0], [69.4, 6555.0], [69.5, 6565.0], [69.6, 6568.0], [69.7, 6569.0], [69.8, 6570.0], [69.9, 6583.0], [70.0, 6583.0], [70.1, 6617.0], [70.2, 6622.0], [70.3, 6625.0], [70.4, 6631.0], [70.5, 6647.0], [70.6, 6695.0], [70.7, 6717.0], [70.8, 6726.0], [70.9, 6728.0], [71.0, 6728.0], [71.1, 6759.0], [71.2, 6766.0], [71.3, 6770.0], [71.4, 6796.0], [71.5, 6810.0], [71.6, 6810.0], [71.7, 6812.0], [71.8, 6823.0], [71.9, 6826.0], [72.0, 6826.0], [72.1, 6836.0], [72.2, 6850.0], [72.3, 6859.0], [72.4, 6868.0], [72.5, 6876.0], [72.6, 6888.0], [72.7, 6891.0], [72.8, 6894.0], [72.9, 6894.0], [73.0, 6894.0], [73.1, 6900.0], [73.2, 6909.0], [73.3, 6913.0], [73.4, 6915.0], [73.5, 6924.0], [73.6, 6925.0], [73.7, 6950.0], [73.8, 6952.0], [73.9, 6955.0], [74.0, 6955.0], [74.1, 6974.0], [74.2, 6978.0], [74.3, 6988.0], [74.4, 6995.0], [74.5, 6995.0], [74.6, 6996.0], [74.7, 6998.0], [74.8, 7002.0], [74.9, 7004.0], [75.0, 7004.0], [75.1, 7016.0], [75.2, 7017.0], [75.3, 7019.0], [75.4, 7026.0], [75.5, 7065.0], [75.6, 7066.0], [75.7, 7075.0], [75.8, 7076.0], [75.9, 7104.0], [76.0, 7104.0], [76.1, 7106.0], [76.2, 7106.0], [76.3, 7124.0], [76.4, 7141.0], [76.5, 7151.0], [76.6, 7180.0], [76.7, 7200.0], [76.8, 7213.0], [76.9, 7218.0], [77.0, 7218.0], [77.1, 7227.0], [77.2, 7229.0], [77.3, 7232.0], [77.4, 7240.0], [77.5, 7249.0], [77.6, 7270.0], [77.7, 7287.0], [77.8, 7305.0], [77.9, 7305.0], [78.0, 7305.0], [78.1, 7341.0], [78.2, 7348.0], [78.3, 7350.0], [78.4, 7362.0], [78.5, 7365.0], [78.6, 7378.0], [78.7, 7386.0], [78.8, 7394.0], [78.9, 7409.0], [79.0, 7409.0], [79.1, 7412.0], [79.2, 7414.0], [79.3, 7414.0], [79.4, 7445.0], [79.5, 7449.0], [79.6, 7460.0], [79.7, 7490.0], [79.8, 7501.0], [79.9, 7511.0], [80.0, 7511.0], [80.1, 7518.0], [80.2, 7547.0], [80.3, 7554.0], [80.4, 7558.0], [80.5, 7570.0], [80.6, 7644.0], [80.7, 7647.0], [80.8, 7657.0], [80.9, 7663.0], [81.0, 7663.0], [81.1, 7691.0], [81.2, 7718.0], [81.3, 7725.0], [81.4, 7738.0], [81.5, 7756.0], [81.6, 7765.0], [81.7, 7773.0], [81.8, 7776.0], [81.9, 7779.0], [82.0, 7779.0], [82.1, 7785.0], [82.2, 7788.0], [82.3, 7794.0], [82.4, 7794.0], [82.5, 7797.0], [82.6, 7800.0], [82.7, 7804.0], [82.8, 7804.0], [82.9, 7807.0], [83.0, 7807.0], [83.1, 7817.0], [83.2, 7821.0], [83.3, 7822.0], [83.4, 7830.0], [83.5, 7834.0], [83.6, 7838.0], [83.7, 7874.0], [83.8, 7881.0], [83.9, 7895.0], [84.0, 7895.0], [84.1, 7926.0], [84.2, 7928.0], [84.3, 7929.0], [84.4, 7935.0], [84.5, 7949.0], [84.6, 7977.0], [84.7, 7980.0], [84.8, 7996.0], [84.9, 8008.0], [85.0, 8008.0], [85.1, 8008.0], [85.2, 8008.0], [85.3, 8016.0], [85.4, 8019.0], [85.5, 8027.0], [85.6, 8041.0], [85.7, 8043.0], [85.8, 8051.0], [85.9, 8072.0], [86.0, 8072.0], [86.1, 8088.0], [86.2, 8105.0], [86.3, 8109.0], [86.4, 8130.0], [86.5, 8173.0], [86.6, 8188.0], [86.7, 8196.0], [86.8, 8205.0], [86.9, 8211.0], [87.0, 8211.0], [87.1, 8219.0], [87.2, 8225.0], [87.3, 8235.0], [87.4, 8240.0], [87.5, 8247.0], [87.6, 8266.0], [87.7, 8272.0], [87.8, 8282.0], [87.9, 8283.0], [88.0, 8283.0], [88.1, 8283.0], [88.2, 8286.0], [88.3, 8288.0], [88.4, 8299.0], [88.5, 8300.0], [88.6, 8300.0], [88.7, 8329.0], [88.8, 8337.0], [88.9, 8339.0], [89.0, 8339.0], [89.1, 8341.0], [89.2, 8343.0], [89.3, 8366.0], [89.4, 8382.0], [89.5, 8398.0], [89.6, 8399.0], [89.7, 8408.0], [89.8, 8412.0], [89.9, 8414.0], [90.0, 8414.0], [90.1, 8419.0], [90.2, 8427.0], [90.3, 8428.0], [90.4, 8445.0], [90.5, 8462.0], [90.6, 8465.0], [90.7, 8474.0], [90.8, 8476.0], [90.9, 8479.0], [91.0, 8479.0], [91.1, 8492.0], [91.2, 8495.0], [91.3, 8496.0], [91.4, 8506.0], [91.5, 8518.0], [91.6, 8522.0], [91.7, 8524.0], [91.8, 8555.0], [91.9, 8559.0], [92.0, 8559.0], [92.1, 8570.0], [92.2, 8573.0], [92.3, 8582.0], [92.4, 8590.0], [92.5, 8590.0], [92.6, 8599.0], [92.7, 8600.0], [92.8, 8601.0], [92.9, 8612.0], [93.0, 8612.0], [93.1, 8613.0], [93.2, 8619.0], [93.3, 8619.0], [93.4, 8646.0], [93.5, 8653.0], [93.6, 8659.0], [93.7, 8669.0], [93.8, 8673.0], [93.9, 8686.0], [94.0, 8686.0], [94.1, 8686.0], [94.2, 8702.0], [94.3, 8712.0], [94.4, 8717.0], [94.5, 8721.0], [94.6, 8736.0], [94.7, 8745.0], [94.8, 8745.0], [94.9, 8753.0], [95.0, 8753.0], [95.1, 8757.0], [95.2, 8774.0], [95.3, 8776.0], [95.4, 8789.0], [95.5, 8820.0], [95.6, 8833.0], [95.7, 8838.0], [95.8, 8853.0], [95.9, 8864.0], [96.0, 8864.0], [96.1, 8865.0], [96.2, 8873.0], [96.3, 8883.0], [96.4, 8891.0], [96.5, 8902.0], [96.6, 8903.0], [96.7, 8918.0], [96.8, 8919.0], [96.9, 8928.0], [97.0, 8928.0], [97.1, 8935.0], [97.2, 8935.0], [97.3, 8939.0], [97.4, 8940.0], [97.5, 8943.0], [97.6, 8957.0], [97.7, 8958.0], [97.8, 8959.0], [97.9, 8972.0], [98.0, 8972.0], [98.1, 8977.0], [98.2, 8979.0], [98.3, 8983.0], [98.4, 9014.0], [98.5, 9033.0], [98.6, 9041.0], [98.7, 9111.0], [98.8, 9117.0], [98.9, 9145.0], [99.0, 9145.0], [99.1, 9148.0], [99.2, 9213.0], [99.3, 9241.0], [99.4, 9272.0], [99.5, 9302.0], [99.6, 9303.0], [99.7, 9346.0], [99.8, 9427.0], [99.9, 9477.0], [100.0, 9477.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 93.0, "series": [{"data": [[600.0, 19.0], [700.0, 93.0], [800.0, 38.0], [900.0, 31.0], [1000.0, 44.0], [1100.0, 50.0], [1200.0, 28.0], [1300.0, 32.0], [1400.0, 33.0], [1500.0, 32.0], [1600.0, 26.0], [1700.0, 12.0], [1800.0, 12.0], [1900.0, 11.0], [2000.0, 7.0], [2100.0, 4.0], [2200.0, 2.0], [2500.0, 9.0], [2600.0, 7.0], [2700.0, 6.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 3.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 5.0], [4400.0, 1.0], [4700.0, 3.0], [4800.0, 3.0], [4900.0, 1.0], [5000.0, 2.0], [5100.0, 3.0], [5300.0, 2.0], [5600.0, 10.0], [5500.0, 5.0], [5400.0, 3.0], [5800.0, 6.0], [5700.0, 5.0], [5900.0, 5.0], [6000.0, 6.0], [6100.0, 4.0], [6300.0, 8.0], [6200.0, 2.0], [6400.0, 5.0], [6500.0, 10.0], [6600.0, 6.0], [6800.0, 14.0], [6700.0, 7.0], [6900.0, 16.0], [7000.0, 10.0], [7100.0, 7.0], [7200.0, 10.0], [7300.0, 10.0], [7400.0, 8.0], [7500.0, 7.0], [7600.0, 5.0], [7700.0, 13.0], [7800.0, 13.0], [7900.0, 8.0], [8000.0, 11.0], [8100.0, 6.0], [8200.0, 15.0], [8400.0, 15.0], [8500.0, 12.0], [8600.0, 13.0], [8300.0, 11.0], [8700.0, 12.0], [8800.0, 9.0], [8900.0, 17.0], [9000.0, 3.0], [9100.0, 4.0], [9200.0, 3.0], [9300.0, 3.0], [9400.0, 2.0], [500.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 376.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 524.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 376.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 524.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.149999999999999, "minX": 1.71697494E12, "maxY": 145.1750000000001, "series": [{"data": [[1.71697602E12, 11.149999999999999], [1.71697494E12, 145.1750000000001], [1.71697608E12, 12.208333333333341]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697608E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1109.9886363636363, "minX": 1.0, "maxY": 9208.5, "series": [{"data": [[2.0, 3904.0], [3.0, 2865.0], [4.0, 2746.3333333333335], [5.0, 2093.4], [6.0, 2245.333333333333], [7.0, 1634.2727272727275], [8.0, 2685.6666666666665], [9.0, 1224.9999999999998], [10.0, 1216.6612903225807], [11.0, 1109.9886363636363], [12.0, 1207.3396226415093], [13.0, 1397.909090909091], [14.0, 1401.8571428571424], [15.0, 1515.5], [16.0, 1623.8484848484848], [17.0, 4172.5], [18.0, 6900.0], [19.0, 6891.0], [20.0, 6925.0], [21.0, 6955.0], [22.0, 6924.0], [23.0, 6988.0], [24.0, 6915.0], [25.0, 7002.0], [26.0, 7017.0], [27.0, 6913.0], [29.0, 7000.0], [30.0, 6952.0], [39.0, 7032.555555555556], [41.0, 7124.0], [40.0, 7075.0], [43.0, 7218.0], [42.0, 7065.0], [45.0, 7200.0], [44.0, 7180.0], [47.0, 7350.0], [46.0, 7227.0], [49.0, 7378.0], [48.0, 7240.0], [51.0, 7270.0], [50.0, 7348.0], [53.0, 7305.0], [52.0, 7365.0], [55.0, 7394.0], [54.0, 7412.0], [57.0, 7249.0], [56.0, 7386.0], [59.0, 7362.0], [58.0, 7305.0], [61.0, 7445.0], [60.0, 7409.0], [63.0, 7490.0], [62.0, 7414.0], [67.0, 7776.0], [66.0, 7518.0], [65.0, 7644.0], [64.0, 7414.0], [71.0, 7718.0], [70.0, 7822.0], [69.0, 7547.0], [68.0, 7765.0], [75.0, 7788.0], [74.0, 7785.0], [73.0, 7738.0], [72.0, 7756.0], [79.0, 7794.0], [78.0, 7807.0], [77.0, 7779.0], [76.0, 7797.0], [83.0, 7838.0], [82.0, 7804.0], [81.0, 7817.0], [80.0, 7804.0], [87.0, 7928.0], [86.0, 7895.0], [85.0, 7929.0], [84.0, 7881.0], [91.0, 8008.0], [90.0, 7949.0], [89.0, 8043.0], [88.0, 8016.0], [95.0, 8051.0], [94.0, 7996.0], [93.0, 8008.0], [92.0, 7980.0], [99.0, 8196.0], [98.0, 8188.0], [97.0, 8027.0], [96.0, 8072.0], [103.0, 8300.0], [102.0, 8247.0], [101.0, 8272.0], [100.0, 8173.0], [107.0, 8286.0], [106.0, 8288.0], [105.0, 8205.0], [104.0, 8235.0], [111.0, 8283.0], [110.0, 8300.0], [109.0, 8329.0], [108.0, 8283.0], [115.0, 8282.0], [114.0, 8408.0], [113.0, 8341.0], [112.0, 8366.0], [119.0, 8385.5], [117.0, 8427.0], [116.0, 8382.0], [123.0, 8496.0], [122.0, 8465.0], [121.0, 8412.0], [120.0, 8476.0], [124.0, 8518.0], [143.0, 8745.0], [142.0, 8686.0], [141.0, 8774.0], [140.0, 8712.0], [139.0, 8686.0], [138.0, 8669.0], [137.0, 8673.0], [136.0, 8560.833333333334], [149.0, 5437.0], [150.0, 4645.666666666666], [151.0, 8883.0], [148.0, 8820.0], [147.0, 8736.0], [146.0, 8745.0], [145.0, 8789.0], [144.0, 8717.0], [154.0, 4521.0], [156.0, 6095.5], [159.0, 4627.666666666666], [158.0, 8935.0], [157.0, 8977.0], [155.0, 8943.0], [153.0, 8939.0], [152.0, 8918.0], [161.0, 6190.0], [164.0, 7301.666666666667], [165.0, 7441.5], [167.0, 3146.0], [166.0, 9097.0], [163.0, 8983.0], [162.0, 9208.5], [160.0, 8958.0], [170.0, 5036.0], [173.0, 5552.0], [175.0, 5962.0], [174.0, 8665.0], [172.0, 8399.0], [171.0, 8884.714285714284], [169.0, 9025.333333333334], [168.0, 9094.666666666668], [176.0, 7534.4], [178.0, 5528.0], [180.0, 7153.25], [182.0, 6832.75], [183.0, 8099.666666666667], [181.0, 8284.0], [179.0, 8363.0], [177.0, 8523.833333333332], [184.0, 5890.5], [186.0, 6181.2], [191.0, 6608.5], [190.0, 7229.0], [189.0, 7506.0], [188.0, 7758.666666666666], [187.0, 7501.0], [185.0, 7975.75], [192.0, 6253.0], [197.0, 6174.5], [198.0, 4936.0], [199.0, 5110.5], [196.0, 6855.5], [195.0, 7034.666666666667], [194.0, 7254.5], [193.0, 7004.0], [200.0, 5616.552380952381], [1.0, 2669.3333333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[71.28111111111113, 3795.22777777778]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 39.666666666666664, "minX": 1.71697494E12, "maxY": 1026112.0, "series": [{"data": [[1.71697602E12, 42754.666666666664], [1.71697494E12, 855093.3333333334], [1.71697608E12, 1026112.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71697602E12, 39.666666666666664], [1.71697494E12, 793.3333333333334], [1.71697608E12, 952.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697608E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1197.7083333333348, "minX": 1.71697494E12, "maxY": 7004.400000000005, "series": [{"data": [[1.71697602E12, 1952.25], [1.71697494E12, 7004.400000000005], [1.71697608E12, 1197.7083333333348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697608E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 618.9291666666666, "minX": 1.71697494E12, "maxY": 6585.982500000003, "series": [{"data": [[1.71697602E12, 680.6], [1.71697494E12, 6585.982500000003], [1.71697608E12, 618.9291666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697608E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 82.3895833333333, "minX": 1.71697494E12, "maxY": 463.22999999999985, "series": [{"data": [[1.71697602E12, 198.05], [1.71697494E12, 463.22999999999985], [1.71697608E12, 82.3895833333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697608E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 503.0, "minX": 1.71697494E12, "maxY": 9477.0, "series": [{"data": [[1.71697602E12, 2696.0], [1.71697494E12, 9477.0], [1.71697608E12, 2898.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71697602E12, 1082.0], [1.71697494E12, 1951.0], [1.71697608E12, 503.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71697602E12, 2622.7000000000003], [1.71697494E12, 8831.7], [1.71697608E12, 1765.2000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71697602E12, 2696.0], [1.71697494E12, 9302.99], [1.71697608E12, 2760.56]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71697602E12, 1710.5], [1.71697494E12, 7296.0], [1.71697608E12, 1119.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71697602E12, 2692.5], [1.71697494E12, 8958.95], [1.71697608E12, 2006.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 777.0, "minX": 1.0, "maxY": 8957.5, "series": [{"data": [[2.0, 2609.5], [8.0, 1084.5], [9.0, 1198.0], [10.0, 1350.5], [11.0, 1140.5], [3.0, 3873.0], [12.0, 1092.0], [14.0, 920.0], [16.0, 4235.0], [1.0, 1647.0], [4.0, 2032.0], [18.0, 6505.0], [20.0, 5860.5], [5.0, 777.0], [21.0, 3868.5], [22.0, 5615.0], [23.0, 7076.0], [6.0, 1986.5], [25.0, 7900.0], [27.0, 8753.0], [28.0, 8957.5], [7.0, 1172.0], [30.0, 8616.0], [31.0, 8272.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 331.5, "minX": 1.0, "maxY": 8540.0, "series": [{"data": [[2.0, 997.5], [8.0, 466.5], [9.0, 635.0], [10.0, 727.0], [11.0, 558.5], [3.0, 3351.0], [12.0, 453.5], [14.0, 331.5], [16.0, 3732.0], [1.0, 628.0], [4.0, 594.0], [18.0, 6070.5], [20.0, 5438.5], [5.0, 362.0], [21.0, 3443.0], [22.0, 5166.5], [23.0, 6659.0], [6.0, 1234.5], [25.0, 7482.5], [27.0, 8335.0], [28.0, 8540.0], [7.0, 566.0], [30.0, 8197.5], [31.0, 7838.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.71697494E12, "maxY": 7.75, "series": [{"data": [[1.71697602E12, 0.5833333333333334], [1.71697494E12, 6.666666666666667], [1.71697608E12, 7.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697608E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71697494E12, "maxY": 8.0, "series": [{"data": [[1.71697602E12, 0.3333333333333333], [1.71697494E12, 6.666666666666667], [1.71697608E12, 8.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697608E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71697494E12, "maxY": 8.0, "series": [{"data": [[1.71697602E12, 0.3333333333333333], [1.71697494E12, 6.666666666666667], [1.71697608E12, 8.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697608E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71697494E12, "maxY": 8.0, "series": [{"data": [[1.71697602E12, 0.3333333333333333], [1.71697494E12, 6.666666666666667], [1.71697608E12, 8.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697608E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


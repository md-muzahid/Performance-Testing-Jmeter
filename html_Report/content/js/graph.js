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
        data: {"result": {"minY": 1951.0, "minX": 0.0, "maxY": 9477.0, "series": [{"data": [[0.0, 1951.0], [0.1, 1951.0], [0.2, 1951.0], [0.3, 1952.0], [0.4, 1952.0], [0.5, 1995.0], [0.6, 1995.0], [0.7, 1995.0], [0.8, 2021.0], [0.9, 2021.0], [1.0, 2161.0], [1.1, 2161.0], [1.2, 2161.0], [1.3, 2706.0], [1.4, 2706.0], [1.5, 2738.0], [1.6, 2738.0], [1.7, 2738.0], [1.8, 2878.0], [1.9, 2878.0], [2.0, 2947.0], [2.1, 2947.0], [2.2, 2947.0], [2.3, 2969.0], [2.4, 2969.0], [2.5, 3035.0], [2.6, 3035.0], [2.7, 3035.0], [2.8, 3146.0], [2.9, 3146.0], [3.0, 3148.0], [3.1, 3148.0], [3.2, 3148.0], [3.3, 3289.0], [3.4, 3289.0], [3.5, 3327.0], [3.6, 3327.0], [3.7, 3327.0], [3.8, 3338.0], [3.9, 3338.0], [4.0, 3371.0], [4.1, 3371.0], [4.2, 3371.0], [4.3, 3407.0], [4.4, 3407.0], [4.5, 3408.0], [4.6, 3408.0], [4.7, 3408.0], [4.8, 3476.0], [4.9, 3476.0], [5.0, 3491.0], [5.1, 3491.0], [5.2, 3491.0], [5.3, 3499.0], [5.4, 3499.0], [5.5, 3506.0], [5.6, 3506.0], [5.7, 3506.0], [5.8, 3585.0], [5.9, 3585.0], [6.0, 3648.0], [6.1, 3648.0], [6.2, 3648.0], [6.3, 3727.0], [6.4, 3727.0], [6.5, 3832.0], [6.6, 3832.0], [6.7, 3832.0], [6.8, 3905.0], [6.9, 3905.0], [7.0, 3922.0], [7.1, 3922.0], [7.2, 3922.0], [7.3, 3981.0], [7.4, 3981.0], [7.5, 4031.0], [7.6, 4031.0], [7.7, 4031.0], [7.8, 4044.0], [7.9, 4044.0], [8.0, 4046.0], [8.1, 4046.0], [8.2, 4046.0], [8.3, 4050.0], [8.4, 4050.0], [8.5, 4150.0], [8.6, 4150.0], [8.7, 4150.0], [8.8, 4169.0], [8.9, 4169.0], [9.0, 4182.0], [9.1, 4182.0], [9.2, 4182.0], [9.3, 4204.0], [9.4, 4204.0], [9.5, 4317.0], [9.6, 4317.0], [9.7, 4317.0], [9.8, 4437.0], [9.9, 4437.0], [10.0, 4529.0], [10.1, 4529.0], [10.2, 4529.0], [10.3, 4558.0], [10.4, 4558.0], [10.5, 4615.0], [10.6, 4615.0], [10.7, 4615.0], [10.8, 4627.0], [10.9, 4627.0], [11.0, 4630.0], [11.1, 4630.0], [11.2, 4630.0], [11.3, 4667.0], [11.4, 4667.0], [11.5, 4676.0], [11.6, 4676.0], [11.7, 4676.0], [11.8, 4708.0], [11.9, 4708.0], [12.0, 4783.0], [12.1, 4783.0], [12.2, 4783.0], [12.3, 4788.0], [12.4, 4788.0], [12.5, 4806.0], [12.6, 4806.0], [12.7, 4806.0], [12.8, 4844.0], [12.9, 4844.0], [13.0, 4897.0], [13.1, 4897.0], [13.2, 4897.0], [13.3, 4930.0], [13.4, 4930.0], [13.5, 5022.0], [13.6, 5022.0], [13.7, 5022.0], [13.8, 5080.0], [13.9, 5080.0], [14.0, 5143.0], [14.1, 5143.0], [14.2, 5143.0], [14.3, 5145.0], [14.4, 5145.0], [14.5, 5153.0], [14.6, 5153.0], [14.7, 5153.0], [14.8, 5302.0], [14.9, 5302.0], [15.0, 5328.0], [15.1, 5328.0], [15.2, 5328.0], [15.3, 5418.0], [15.4, 5418.0], [15.5, 5438.0], [15.6, 5438.0], [15.7, 5438.0], [15.8, 5472.0], [15.9, 5472.0], [16.0, 5501.0], [16.1, 5501.0], [16.2, 5501.0], [16.3, 5522.0], [16.4, 5522.0], [16.5, 5528.0], [16.6, 5528.0], [16.7, 5528.0], [16.8, 5554.0], [16.9, 5554.0], [17.0, 5585.0], [17.1, 5585.0], [17.2, 5585.0], [17.3, 5608.0], [17.4, 5608.0], [17.5, 5622.0], [17.6, 5622.0], [17.7, 5622.0], [17.8, 5624.0], [17.9, 5624.0], [18.0, 5626.0], [18.1, 5626.0], [18.2, 5626.0], [18.3, 5630.0], [18.4, 5630.0], [18.5, 5633.0], [18.6, 5633.0], [18.7, 5633.0], [18.8, 5643.0], [18.9, 5643.0], [19.0, 5666.0], [19.1, 5666.0], [19.2, 5666.0], [19.3, 5679.0], [19.4, 5679.0], [19.5, 5697.0], [19.6, 5697.0], [19.7, 5697.0], [19.8, 5704.0], [19.9, 5704.0], [20.0, 5712.0], [20.1, 5712.0], [20.2, 5712.0], [20.3, 5777.0], [20.4, 5777.0], [20.5, 5785.0], [20.6, 5785.0], [20.7, 5785.0], [20.8, 5792.0], [20.9, 5792.0], [21.0, 5823.0], [21.1, 5823.0], [21.2, 5823.0], [21.3, 5832.0], [21.4, 5832.0], [21.5, 5839.0], [21.6, 5839.0], [21.7, 5839.0], [21.8, 5868.0], [21.9, 5868.0], [22.0, 5882.0], [22.1, 5882.0], [22.2, 5882.0], [22.3, 5895.0], [22.4, 5895.0], [22.5, 5902.0], [22.6, 5902.0], [22.7, 5902.0], [22.8, 5921.0], [22.9, 5921.0], [23.0, 5951.0], [23.1, 5951.0], [23.2, 5951.0], [23.3, 5960.0], [23.4, 5960.0], [23.5, 5992.0], [23.6, 5992.0], [23.7, 5992.0], [23.8, 6050.0], [23.9, 6050.0], [24.0, 6052.0], [24.1, 6052.0], [24.2, 6052.0], [24.3, 6071.0], [24.4, 6071.0], [24.5, 6073.0], [24.6, 6073.0], [24.7, 6073.0], [24.8, 6087.0], [24.9, 6087.0], [25.0, 6093.0], [25.1, 6093.0], [25.2, 6093.0], [25.3, 6130.0], [25.4, 6130.0], [25.5, 6138.0], [25.6, 6138.0], [25.7, 6138.0], [25.8, 6161.0], [25.9, 6161.0], [26.0, 6169.0], [26.1, 6169.0], [26.2, 6169.0], [26.3, 6246.0], [26.4, 6246.0], [26.5, 6284.0], [26.6, 6284.0], [26.7, 6284.0], [26.8, 6323.0], [26.9, 6323.0], [27.0, 6333.0], [27.1, 6333.0], [27.2, 6333.0], [27.3, 6339.0], [27.4, 6339.0], [27.5, 6347.0], [27.6, 6347.0], [27.7, 6347.0], [27.8, 6377.0], [27.9, 6377.0], [28.0, 6385.0], [28.1, 6385.0], [28.2, 6385.0], [28.3, 6389.0], [28.4, 6389.0], [28.5, 6396.0], [28.6, 6396.0], [28.7, 6396.0], [28.8, 6419.0], [28.9, 6419.0], [29.0, 6437.0], [29.1, 6437.0], [29.2, 6437.0], [29.3, 6475.0], [29.4, 6475.0], [29.5, 6486.0], [29.6, 6486.0], [29.7, 6486.0], [29.8, 6497.0], [29.9, 6497.0], [30.0, 6524.0], [30.1, 6524.0], [30.2, 6524.0], [30.3, 6540.0], [30.4, 6540.0], [30.5, 6548.0], [30.6, 6548.0], [30.7, 6548.0], [30.8, 6554.0], [30.9, 6554.0], [31.0, 6555.0], [31.1, 6555.0], [31.2, 6555.0], [31.3, 6565.0], [31.4, 6565.0], [31.5, 6568.0], [31.6, 6568.0], [31.7, 6568.0], [31.8, 6569.0], [31.9, 6569.0], [32.0, 6570.0], [32.1, 6570.0], [32.2, 6570.0], [32.3, 6583.0], [32.4, 6583.0], [32.5, 6617.0], [32.6, 6617.0], [32.7, 6617.0], [32.8, 6622.0], [32.9, 6622.0], [33.0, 6625.0], [33.1, 6625.0], [33.2, 6625.0], [33.3, 6631.0], [33.4, 6631.0], [33.5, 6647.0], [33.6, 6647.0], [33.7, 6647.0], [33.8, 6695.0], [33.9, 6695.0], [34.0, 6717.0], [34.1, 6717.0], [34.2, 6717.0], [34.3, 6726.0], [34.4, 6726.0], [34.5, 6728.0], [34.6, 6728.0], [34.7, 6728.0], [34.8, 6759.0], [34.9, 6759.0], [35.0, 6766.0], [35.1, 6766.0], [35.2, 6766.0], [35.3, 6770.0], [35.4, 6770.0], [35.5, 6796.0], [35.6, 6796.0], [35.7, 6796.0], [35.8, 6810.0], [35.9, 6810.0], [36.0, 6810.0], [36.1, 6810.0], [36.2, 6810.0], [36.3, 6812.0], [36.4, 6812.0], [36.5, 6823.0], [36.6, 6823.0], [36.7, 6823.0], [36.8, 6826.0], [36.9, 6826.0], [37.0, 6836.0], [37.1, 6836.0], [37.2, 6836.0], [37.3, 6850.0], [37.4, 6850.0], [37.5, 6859.0], [37.6, 6859.0], [37.7, 6859.0], [37.8, 6868.0], [37.9, 6868.0], [38.0, 6876.0], [38.1, 6876.0], [38.2, 6876.0], [38.3, 6888.0], [38.4, 6888.0], [38.5, 6891.0], [38.6, 6891.0], [38.7, 6891.0], [38.8, 6894.0], [38.9, 6894.0], [39.0, 6894.0], [39.1, 6894.0], [39.2, 6894.0], [39.3, 6900.0], [39.4, 6900.0], [39.5, 6909.0], [39.6, 6909.0], [39.7, 6909.0], [39.8, 6913.0], [39.9, 6913.0], [40.0, 6915.0], [40.1, 6915.0], [40.2, 6915.0], [40.3, 6924.0], [40.4, 6924.0], [40.5, 6925.0], [40.6, 6925.0], [40.7, 6925.0], [40.8, 6950.0], [40.9, 6950.0], [41.0, 6952.0], [41.1, 6952.0], [41.2, 6952.0], [41.3, 6955.0], [41.4, 6955.0], [41.5, 6974.0], [41.6, 6974.0], [41.7, 6974.0], [41.8, 6978.0], [41.9, 6978.0], [42.0, 6988.0], [42.1, 6988.0], [42.2, 6988.0], [42.3, 6995.0], [42.4, 6995.0], [42.5, 6995.0], [42.6, 6995.0], [42.7, 6995.0], [42.8, 6996.0], [42.9, 6996.0], [43.0, 6998.0], [43.1, 6998.0], [43.2, 6998.0], [43.3, 7002.0], [43.4, 7002.0], [43.5, 7004.0], [43.6, 7004.0], [43.7, 7004.0], [43.8, 7016.0], [43.9, 7016.0], [44.0, 7017.0], [44.1, 7017.0], [44.2, 7017.0], [44.3, 7019.0], [44.4, 7019.0], [44.5, 7026.0], [44.6, 7026.0], [44.7, 7026.0], [44.8, 7065.0], [44.9, 7065.0], [45.0, 7066.0], [45.1, 7066.0], [45.2, 7066.0], [45.3, 7075.0], [45.4, 7075.0], [45.5, 7076.0], [45.6, 7076.0], [45.7, 7076.0], [45.8, 7104.0], [45.9, 7104.0], [46.0, 7106.0], [46.1, 7106.0], [46.2, 7106.0], [46.3, 7106.0], [46.4, 7106.0], [46.5, 7124.0], [46.6, 7124.0], [46.7, 7124.0], [46.8, 7141.0], [46.9, 7141.0], [47.0, 7151.0], [47.1, 7151.0], [47.2, 7151.0], [47.3, 7180.0], [47.4, 7180.0], [47.5, 7200.0], [47.6, 7200.0], [47.7, 7200.0], [47.8, 7213.0], [47.9, 7213.0], [48.0, 7218.0], [48.1, 7218.0], [48.2, 7218.0], [48.3, 7227.0], [48.4, 7227.0], [48.5, 7229.0], [48.6, 7229.0], [48.7, 7229.0], [48.8, 7232.0], [48.9, 7232.0], [49.0, 7240.0], [49.1, 7240.0], [49.2, 7240.0], [49.3, 7249.0], [49.4, 7249.0], [49.5, 7270.0], [49.6, 7270.0], [49.7, 7270.0], [49.8, 7287.0], [49.9, 7287.0], [50.0, 7305.0], [50.1, 7305.0], [50.2, 7305.0], [50.3, 7305.0], [50.4, 7305.0], [50.5, 7341.0], [50.6, 7341.0], [50.7, 7341.0], [50.8, 7348.0], [50.9, 7348.0], [51.0, 7350.0], [51.1, 7350.0], [51.2, 7350.0], [51.3, 7362.0], [51.4, 7362.0], [51.5, 7365.0], [51.6, 7365.0], [51.7, 7365.0], [51.8, 7378.0], [51.9, 7378.0], [52.0, 7386.0], [52.1, 7386.0], [52.2, 7386.0], [52.3, 7394.0], [52.4, 7394.0], [52.5, 7409.0], [52.6, 7409.0], [52.7, 7409.0], [52.8, 7412.0], [52.9, 7412.0], [53.0, 7414.0], [53.1, 7414.0], [53.2, 7414.0], [53.3, 7414.0], [53.4, 7414.0], [53.5, 7445.0], [53.6, 7445.0], [53.7, 7445.0], [53.8, 7449.0], [53.9, 7449.0], [54.0, 7460.0], [54.1, 7460.0], [54.2, 7460.0], [54.3, 7490.0], [54.4, 7490.0], [54.5, 7501.0], [54.6, 7501.0], [54.7, 7501.0], [54.8, 7511.0], [54.9, 7511.0], [55.0, 7518.0], [55.1, 7518.0], [55.2, 7518.0], [55.3, 7547.0], [55.4, 7547.0], [55.5, 7554.0], [55.6, 7554.0], [55.7, 7554.0], [55.8, 7558.0], [55.9, 7558.0], [56.0, 7570.0], [56.1, 7570.0], [56.2, 7570.0], [56.3, 7644.0], [56.4, 7644.0], [56.5, 7647.0], [56.6, 7647.0], [56.7, 7647.0], [56.8, 7657.0], [56.9, 7657.0], [57.0, 7663.0], [57.1, 7663.0], [57.2, 7663.0], [57.3, 7691.0], [57.4, 7691.0], [57.5, 7718.0], [57.6, 7718.0], [57.7, 7718.0], [57.8, 7725.0], [57.9, 7725.0], [58.0, 7738.0], [58.1, 7738.0], [58.2, 7738.0], [58.3, 7756.0], [58.4, 7756.0], [58.5, 7765.0], [58.6, 7765.0], [58.7, 7765.0], [58.8, 7773.0], [58.9, 7773.0], [59.0, 7776.0], [59.1, 7776.0], [59.2, 7776.0], [59.3, 7779.0], [59.4, 7779.0], [59.5, 7785.0], [59.6, 7785.0], [59.7, 7785.0], [59.8, 7788.0], [59.9, 7788.0], [60.0, 7794.0], [60.1, 7794.0], [60.2, 7794.0], [60.3, 7794.0], [60.4, 7794.0], [60.5, 7797.0], [60.6, 7797.0], [60.7, 7797.0], [60.8, 7800.0], [60.9, 7800.0], [61.0, 7804.0], [61.1, 7804.0], [61.2, 7804.0], [61.3, 7804.0], [61.4, 7804.0], [61.5, 7807.0], [61.6, 7807.0], [61.7, 7807.0], [61.8, 7817.0], [61.9, 7817.0], [62.0, 7821.0], [62.1, 7821.0], [62.2, 7821.0], [62.3, 7822.0], [62.4, 7822.0], [62.5, 7830.0], [62.6, 7830.0], [62.7, 7830.0], [62.8, 7834.0], [62.9, 7834.0], [63.0, 7838.0], [63.1, 7838.0], [63.2, 7838.0], [63.3, 7874.0], [63.4, 7874.0], [63.5, 7881.0], [63.6, 7881.0], [63.7, 7881.0], [63.8, 7895.0], [63.9, 7895.0], [64.0, 7926.0], [64.1, 7926.0], [64.2, 7926.0], [64.3, 7928.0], [64.4, 7928.0], [64.5, 7929.0], [64.6, 7929.0], [64.7, 7929.0], [64.8, 7935.0], [64.9, 7935.0], [65.0, 7949.0], [65.1, 7949.0], [65.2, 7949.0], [65.3, 7977.0], [65.4, 7977.0], [65.5, 7980.0], [65.6, 7980.0], [65.7, 7980.0], [65.8, 7996.0], [65.9, 7996.0], [66.0, 8008.0], [66.1, 8008.0], [66.2, 8008.0], [66.3, 8008.0], [66.4, 8008.0], [66.5, 8008.0], [66.6, 8008.0], [66.7, 8008.0], [66.8, 8016.0], [66.9, 8016.0], [67.0, 8019.0], [67.1, 8019.0], [67.2, 8019.0], [67.3, 8027.0], [67.4, 8027.0], [67.5, 8041.0], [67.6, 8041.0], [67.7, 8041.0], [67.8, 8043.0], [67.9, 8043.0], [68.0, 8051.0], [68.1, 8051.0], [68.2, 8051.0], [68.3, 8072.0], [68.4, 8072.0], [68.5, 8088.0], [68.6, 8088.0], [68.7, 8088.0], [68.8, 8105.0], [68.9, 8105.0], [69.0, 8109.0], [69.1, 8109.0], [69.2, 8109.0], [69.3, 8130.0], [69.4, 8130.0], [69.5, 8173.0], [69.6, 8173.0], [69.7, 8173.0], [69.8, 8188.0], [69.9, 8188.0], [70.0, 8196.0], [70.1, 8196.0], [70.2, 8196.0], [70.3, 8205.0], [70.4, 8205.0], [70.5, 8211.0], [70.6, 8211.0], [70.7, 8211.0], [70.8, 8219.0], [70.9, 8219.0], [71.0, 8225.0], [71.1, 8225.0], [71.2, 8225.0], [71.3, 8235.0], [71.4, 8235.0], [71.5, 8240.0], [71.6, 8240.0], [71.7, 8240.0], [71.8, 8247.0], [71.9, 8247.0], [72.0, 8266.0], [72.1, 8266.0], [72.2, 8266.0], [72.3, 8272.0], [72.4, 8272.0], [72.5, 8282.0], [72.6, 8282.0], [72.7, 8282.0], [72.8, 8283.0], [72.9, 8283.0], [73.0, 8283.0], [73.1, 8283.0], [73.2, 8283.0], [73.3, 8286.0], [73.4, 8286.0], [73.5, 8288.0], [73.6, 8288.0], [73.7, 8288.0], [73.8, 8299.0], [73.9, 8299.0], [74.0, 8300.0], [74.1, 8300.0], [74.2, 8300.0], [74.3, 8300.0], [74.4, 8300.0], [74.5, 8329.0], [74.6, 8329.0], [74.7, 8329.0], [74.8, 8337.0], [74.9, 8337.0], [75.0, 8339.0], [75.1, 8339.0], [75.2, 8339.0], [75.3, 8341.0], [75.4, 8341.0], [75.5, 8343.0], [75.6, 8343.0], [75.7, 8343.0], [75.8, 8366.0], [75.9, 8366.0], [76.0, 8382.0], [76.1, 8382.0], [76.2, 8382.0], [76.3, 8398.0], [76.4, 8398.0], [76.5, 8399.0], [76.6, 8399.0], [76.7, 8399.0], [76.8, 8408.0], [76.9, 8408.0], [77.0, 8412.0], [77.1, 8412.0], [77.2, 8412.0], [77.3, 8414.0], [77.4, 8414.0], [77.5, 8419.0], [77.6, 8419.0], [77.7, 8419.0], [77.8, 8427.0], [77.9, 8427.0], [78.0, 8428.0], [78.1, 8428.0], [78.2, 8428.0], [78.3, 8445.0], [78.4, 8445.0], [78.5, 8462.0], [78.6, 8462.0], [78.7, 8462.0], [78.8, 8465.0], [78.9, 8465.0], [79.0, 8474.0], [79.1, 8474.0], [79.2, 8474.0], [79.3, 8476.0], [79.4, 8476.0], [79.5, 8479.0], [79.6, 8479.0], [79.7, 8479.0], [79.8, 8492.0], [79.9, 8492.0], [80.0, 8495.0], [80.1, 8495.0], [80.2, 8495.0], [80.3, 8496.0], [80.4, 8496.0], [80.5, 8506.0], [80.6, 8506.0], [80.7, 8506.0], [80.8, 8518.0], [80.9, 8518.0], [81.0, 8522.0], [81.1, 8522.0], [81.2, 8522.0], [81.3, 8524.0], [81.4, 8524.0], [81.5, 8555.0], [81.6, 8555.0], [81.7, 8555.0], [81.8, 8559.0], [81.9, 8559.0], [82.0, 8570.0], [82.1, 8570.0], [82.2, 8570.0], [82.3, 8573.0], [82.4, 8573.0], [82.5, 8582.0], [82.6, 8582.0], [82.7, 8582.0], [82.8, 8590.0], [82.9, 8590.0], [83.0, 8590.0], [83.1, 8590.0], [83.2, 8590.0], [83.3, 8599.0], [83.4, 8599.0], [83.5, 8600.0], [83.6, 8600.0], [83.7, 8600.0], [83.8, 8601.0], [83.9, 8601.0], [84.0, 8612.0], [84.1, 8612.0], [84.2, 8612.0], [84.3, 8613.0], [84.4, 8613.0], [84.5, 8619.0], [84.6, 8619.0], [84.7, 8619.0], [84.8, 8619.0], [84.9, 8619.0], [85.0, 8646.0], [85.1, 8646.0], [85.2, 8646.0], [85.3, 8653.0], [85.4, 8653.0], [85.5, 8659.0], [85.6, 8659.0], [85.7, 8659.0], [85.8, 8669.0], [85.9, 8669.0], [86.0, 8673.0], [86.1, 8673.0], [86.2, 8673.0], [86.3, 8686.0], [86.4, 8686.0], [86.5, 8686.0], [86.6, 8686.0], [86.7, 8686.0], [86.8, 8702.0], [86.9, 8702.0], [87.0, 8712.0], [87.1, 8712.0], [87.2, 8712.0], [87.3, 8717.0], [87.4, 8717.0], [87.5, 8721.0], [87.6, 8721.0], [87.7, 8721.0], [87.8, 8736.0], [87.9, 8736.0], [88.0, 8745.0], [88.1, 8745.0], [88.2, 8745.0], [88.3, 8745.0], [88.4, 8745.0], [88.5, 8753.0], [88.6, 8753.0], [88.7, 8753.0], [88.8, 8757.0], [88.9, 8757.0], [89.0, 8774.0], [89.1, 8774.0], [89.2, 8774.0], [89.3, 8776.0], [89.4, 8776.0], [89.5, 8789.0], [89.6, 8789.0], [89.7, 8789.0], [89.8, 8820.0], [89.9, 8820.0], [90.0, 8833.0], [90.1, 8833.0], [90.2, 8833.0], [90.3, 8838.0], [90.4, 8838.0], [90.5, 8853.0], [90.6, 8853.0], [90.7, 8853.0], [90.8, 8864.0], [90.9, 8864.0], [91.0, 8865.0], [91.1, 8865.0], [91.2, 8865.0], [91.3, 8873.0], [91.4, 8873.0], [91.5, 8883.0], [91.6, 8883.0], [91.7, 8883.0], [91.8, 8891.0], [91.9, 8891.0], [92.0, 8902.0], [92.1, 8902.0], [92.2, 8902.0], [92.3, 8903.0], [92.4, 8903.0], [92.5, 8918.0], [92.6, 8918.0], [92.7, 8918.0], [92.8, 8919.0], [92.9, 8919.0], [93.0, 8928.0], [93.1, 8928.0], [93.2, 8928.0], [93.3, 8935.0], [93.4, 8935.0], [93.5, 8935.0], [93.6, 8935.0], [93.7, 8935.0], [93.8, 8939.0], [93.9, 8939.0], [94.0, 8940.0], [94.1, 8940.0], [94.2, 8940.0], [94.3, 8943.0], [94.4, 8943.0], [94.5, 8957.0], [94.6, 8957.0], [94.7, 8957.0], [94.8, 8958.0], [94.9, 8958.0], [95.0, 8959.0], [95.1, 8959.0], [95.2, 8959.0], [95.3, 8972.0], [95.4, 8972.0], [95.5, 8977.0], [95.6, 8977.0], [95.7, 8977.0], [95.8, 8979.0], [95.9, 8979.0], [96.0, 8983.0], [96.1, 8983.0], [96.2, 8983.0], [96.3, 9014.0], [96.4, 9014.0], [96.5, 9033.0], [96.6, 9033.0], [96.7, 9033.0], [96.8, 9041.0], [96.9, 9041.0], [97.0, 9111.0], [97.1, 9111.0], [97.2, 9111.0], [97.3, 9117.0], [97.4, 9117.0], [97.5, 9145.0], [97.6, 9145.0], [97.7, 9145.0], [97.8, 9148.0], [97.9, 9148.0], [98.0, 9213.0], [98.1, 9213.0], [98.2, 9213.0], [98.3, 9241.0], [98.4, 9241.0], [98.5, 9272.0], [98.6, 9272.0], [98.7, 9272.0], [98.8, 9302.0], [98.9, 9302.0], [99.0, 9303.0], [99.1, 9303.0], [99.2, 9303.0], [99.3, 9346.0], [99.4, 9346.0], [99.5, 9427.0], [99.6, 9427.0], [99.7, 9427.0], [99.8, 9477.0], [99.9, 9477.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 17.0, "series": [{"data": [[1900.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 3.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 2.0], [4600.0, 5.0], [4400.0, 1.0], [4700.0, 3.0], [4800.0, 3.0], [4900.0, 1.0], [5000.0, 2.0], [5100.0, 3.0], [5300.0, 2.0], [5600.0, 10.0], [5500.0, 5.0], [5400.0, 3.0], [5800.0, 6.0], [5700.0, 5.0], [5900.0, 5.0], [6000.0, 6.0], [6100.0, 4.0], [6300.0, 8.0], [6200.0, 2.0], [6400.0, 5.0], [6500.0, 10.0], [6600.0, 6.0], [6800.0, 14.0], [6700.0, 7.0], [6900.0, 16.0], [7000.0, 10.0], [7100.0, 7.0], [7200.0, 10.0], [7300.0, 10.0], [7400.0, 8.0], [7500.0, 7.0], [7600.0, 5.0], [7700.0, 13.0], [7800.0, 13.0], [7900.0, 8.0], [8000.0, 11.0], [8100.0, 6.0], [8200.0, 15.0], [8400.0, 15.0], [8500.0, 12.0], [8600.0, 13.0], [8300.0, 11.0], [8700.0, 12.0], [8800.0, 9.0], [8900.0, 17.0], [9000.0, 3.0], [9100.0, 4.0], [9200.0, 3.0], [9300.0, 3.0], [9400.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 400.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 400.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 400.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 145.1750000000001, "minX": 1.71697494E12, "maxY": 145.1750000000001, "series": [{"data": [[1.71697494E12, 145.1750000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697494E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3146.0, "minX": 1.0, "maxY": 9208.5, "series": [{"data": [[2.0, 6631.0], [3.0, 6728.0], [4.0, 6717.0], [5.0, 6759.0], [6.0, 6625.0], [7.0, 6868.0], [8.0, 6810.0], [9.0, 6796.0], [10.0, 6888.0], [11.0, 6826.0], [12.0, 6836.0], [13.0, 6823.0], [14.0, 6978.0], [15.0, 6859.0], [16.0, 6909.0], [17.0, 6850.0], [18.0, 6900.0], [19.0, 6891.0], [20.0, 6925.0], [21.0, 6955.0], [22.0, 6924.0], [23.0, 6988.0], [24.0, 6915.0], [25.0, 7002.0], [26.0, 7017.0], [27.0, 6913.0], [29.0, 7000.0], [30.0, 6952.0], [39.0, 7032.555555555556], [41.0, 7124.0], [40.0, 7075.0], [43.0, 7218.0], [42.0, 7065.0], [45.0, 7200.0], [44.0, 7180.0], [47.0, 7350.0], [46.0, 7227.0], [49.0, 7378.0], [48.0, 7240.0], [51.0, 7270.0], [50.0, 7348.0], [53.0, 7305.0], [52.0, 7365.0], [55.0, 7394.0], [54.0, 7412.0], [57.0, 7249.0], [56.0, 7386.0], [59.0, 7362.0], [58.0, 7305.0], [61.0, 7445.0], [60.0, 7409.0], [63.0, 7490.0], [62.0, 7414.0], [67.0, 7776.0], [66.0, 7518.0], [65.0, 7644.0], [64.0, 7414.0], [71.0, 7718.0], [70.0, 7822.0], [69.0, 7547.0], [68.0, 7765.0], [75.0, 7788.0], [74.0, 7785.0], [73.0, 7738.0], [72.0, 7756.0], [79.0, 7794.0], [78.0, 7807.0], [77.0, 7779.0], [76.0, 7797.0], [83.0, 7838.0], [82.0, 7804.0], [81.0, 7817.0], [80.0, 7804.0], [87.0, 7928.0], [86.0, 7895.0], [85.0, 7929.0], [84.0, 7881.0], [91.0, 8008.0], [90.0, 7949.0], [89.0, 8043.0], [88.0, 8016.0], [95.0, 8051.0], [94.0, 7996.0], [93.0, 8008.0], [92.0, 7980.0], [99.0, 8196.0], [98.0, 8188.0], [97.0, 8027.0], [96.0, 8072.0], [103.0, 8300.0], [102.0, 8247.0], [101.0, 8272.0], [100.0, 8173.0], [107.0, 8286.0], [106.0, 8288.0], [105.0, 8205.0], [104.0, 8235.0], [111.0, 8283.0], [110.0, 8300.0], [109.0, 8329.0], [108.0, 8283.0], [115.0, 8282.0], [114.0, 8408.0], [113.0, 8341.0], [112.0, 8366.0], [119.0, 8385.5], [117.0, 8427.0], [116.0, 8382.0], [123.0, 8496.0], [122.0, 8465.0], [121.0, 8412.0], [120.0, 8476.0], [124.0, 8518.0], [143.0, 8745.0], [142.0, 8686.0], [141.0, 8774.0], [140.0, 8712.0], [139.0, 8686.0], [138.0, 8669.0], [137.0, 8673.0], [136.0, 8560.833333333334], [149.0, 5437.0], [150.0, 4645.666666666666], [151.0, 8883.0], [148.0, 8820.0], [147.0, 8736.0], [146.0, 8745.0], [145.0, 8789.0], [144.0, 8717.0], [154.0, 4521.0], [156.0, 6095.5], [159.0, 4627.666666666666], [158.0, 8935.0], [157.0, 8977.0], [155.0, 8943.0], [153.0, 8939.0], [152.0, 8918.0], [161.0, 6190.0], [164.0, 7301.666666666667], [165.0, 7441.5], [167.0, 3146.0], [166.0, 9097.0], [163.0, 8983.0], [162.0, 9208.5], [160.0, 8958.0], [170.0, 5036.0], [173.0, 5552.0], [175.0, 5962.0], [174.0, 8665.0], [172.0, 8399.0], [171.0, 8884.714285714284], [169.0, 9025.333333333334], [168.0, 9094.666666666668], [176.0, 7534.4], [178.0, 5528.0], [180.0, 7153.25], [182.0, 6832.75], [183.0, 8099.666666666667], [181.0, 8284.0], [179.0, 8363.0], [177.0, 8523.833333333332], [184.0, 5890.5], [186.0, 6181.2], [191.0, 6608.5], [190.0, 7229.0], [189.0, 7506.0], [188.0, 7758.666666666666], [187.0, 7501.0], [185.0, 7975.75], [192.0, 6253.0], [197.0, 6174.5], [198.0, 4936.0], [199.0, 5110.5], [196.0, 6855.5], [195.0, 7034.666666666667], [194.0, 7254.5], [193.0, 7004.0], [200.0, 5616.552380952381], [1.0, 6569.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[145.1750000000001, 7004.400000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 793.3333333333334, "minX": 1.71697494E12, "maxY": 855093.3333333334, "series": [{"data": [[1.71697494E12, 855093.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71697494E12, 793.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697494E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7004.400000000005, "minX": 1.71697494E12, "maxY": 7004.400000000005, "series": [{"data": [[1.71697494E12, 7004.400000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697494E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6585.982500000003, "minX": 1.71697494E12, "maxY": 6585.982500000003, "series": [{"data": [[1.71697494E12, 6585.982500000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697494E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 463.22999999999985, "minX": 1.71697494E12, "maxY": 463.22999999999985, "series": [{"data": [[1.71697494E12, 463.22999999999985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697494E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1951.0, "minX": 1.71697494E12, "maxY": 9477.0, "series": [{"data": [[1.71697494E12, 9477.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71697494E12, 1951.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71697494E12, 8831.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71697494E12, 9302.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71697494E12, 7296.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71697494E12, 8958.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697494E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2379.5, "minX": 3.0, "maxY": 8957.5, "series": [{"data": [[3.0, 6631.0], [16.0, 7259.5], [18.0, 6505.0], [20.0, 5860.5], [21.0, 3868.5], [22.0, 5615.0], [23.0, 7076.0], [6.0, 2379.5], [25.0, 7900.0], [27.0, 8753.0], [28.0, 8957.5], [30.0, 8616.0], [31.0, 8272.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1986.5, "minX": 3.0, "maxY": 8540.0, "series": [{"data": [[3.0, 6235.0], [16.0, 6858.0], [18.0, 6070.5], [20.0, 5438.5], [21.0, 3443.0], [22.0, 5166.5], [23.0, 6659.0], [6.0, 1986.5], [25.0, 7482.5], [27.0, 8335.0], [28.0, 8540.0], [30.0, 8197.5], [31.0, 7838.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.71697494E12, "maxY": 6.666666666666667, "series": [{"data": [[1.71697494E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697494E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.71697494E12, "maxY": 6.666666666666667, "series": [{"data": [[1.71697494E12, 6.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71697494E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.71697494E12, "maxY": 6.666666666666667, "series": [{"data": [[1.71697494E12, 6.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697494E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.71697494E12, "maxY": 6.666666666666667, "series": [{"data": [[1.71697494E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71697494E12, "title": "Total Transactions Per Second"}},
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

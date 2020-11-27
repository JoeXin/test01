import React, { Component } from 'react'

import './index.less'
class Tab extends Component {
   componentDidMount() {
      var a = 5, b = 65;
      a = a ^ b;
      b = a ^ b;
      a = a ^ b;
      console.log(a, b);
      console.log(      this.bubbleSort([2, 23, 4, 234, 23, 4, 234, 3242, 342, 2, 234, 234, 34])
      );
   }
   swap = (arr, i, j) => {
      arr[i] = arr[i] ^ arr[j];
      arr[j] = arr[i] ^ arr[j];
      arr[i] = arr[i] ^ arr[j];
   }

   bubbleSort = (arr) => {
      if (arr == null || arr.length <= 0) {
         return []
      }
      var len = arr.length;
      for (var end = len - 1; end > 0; end--) {
         for (var i = 0; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
               this.swap(arr, i, i + 1)
            }
         }
      }
   }

   render() {
      return (
         <div id="tab-demo">
            <div class="tabs-bar" role="tablist">
               <ul class="tabs-nav">
                  <li role="tab" class="tabs-tab">Tab 1</li>
                  <li role="tab" class="tabs-tab">Tab 2</li>
                  <li role="tab" class="tabs-tab">Tab 3</li>
               </ul>
            </div>
            <div class="tabs-content">
               <div role="tabpanel" class="tabs-panel">
                  第一个 Tab 里的内容
               </div>
               <div role="tabpanel" class="tabs-panel">
                  第二个 Tab 里的内容
               </div>
               <div role="tabpanel" class="tabs-panel">
                  第三个 Tab 里的内容
               </div>
            </div>
         </div>
      )
   }
}

export default Tab

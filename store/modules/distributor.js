// import {
//   getApplyDistributionMember
// } from '@/common/vmeitime-http/distributor.js'

// const distributor = {
//   state: {
//     distributorInfo: {}
//   },

//   mutations: {
//     SET_DISTRIBUTOR_INFO: (state, distributorInfo) => {
//       state.distributorInfo = distributorInfo
//     },
//   },

//   actions: {
//     getDistributorInfo({
//       commit
//     }) {
//       return new Promise((resolve, reject) => {
//         getApplyDistributionMember().then(res => {
//           commit('SET_DISTRIBUTOR_INFO', res.data||{})
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     }
//   }

// }

// export default distributor
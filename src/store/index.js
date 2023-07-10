import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localStorageに保存したリストを取得
const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    // localStorageにはJSON形式の文字列型でデータが保存されている
    lists: savedLists ? JSON.parse(savedLists):[
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {    
    /*
    * ストアの状態の変更
    * stateのデータへリストの追加
    * [state]コミット時に受け取る引数payload 
    * [payload]コミット時に受け取る引数payload 
    */    
    addlist(state, payload) {
      state.lists.push({title: payload.title, cards:[]})
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    }
  },
  getters: {
  }
})

  /*
  * 【subscribe】mutationの後に呼ばれる 
  * [mutation]mutationインスタンス
  * [state]mutation後のデータの状態
  */
// データの状態を更新後にlocalStorageへデータの状態を保存
store.subscribe((mutation, state) => {
  // データを文字列型にするにはJSON.stringify(保存するデータ)でJSON形式に変換
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

// main.jsでインポートする
export default store

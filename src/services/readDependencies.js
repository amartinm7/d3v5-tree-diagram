const packageJson = require ('./dependencies/package.json')

class ReadDependencies {
  constructor(){
    // eslint-disable-next-line no-console
    console.log(`ReadDependencies... ${packageJson}`)
  }

  getDependencies(){
    // eslint-disable-next-line no-console
    console.log(`running... ${JSON.stringify(packageJson.dependencies)}`)
    // eslint-disable-next-line no-console
    Object.keys(packageJson.dependencies).forEach(key => console.log(key))
    const children = Object.keys(packageJson.dependencies).map(key => {
      const color = key.includes('@vue')? {stroke:'lightblue', fill: 'orange'} : {stroke:'lightblue', fill: 'steelblue'}
      return {
        'name': `${key}: ${packageJson.dependencies[key]}`,
        'color': color
      }
    })

    const treeData =
      {
        'name': `${packageJson.name}: ${packageJson.version}`,
        'color': 'lightblue',
        'children': children
      }
    return treeData
  }
}

export default new ReadDependencies()

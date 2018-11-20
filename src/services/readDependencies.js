import packageJson from  '../../package.json'

class ReadDependencies {
  constructor(){
    // eslint-disable-next-line no-console
    console.log(`ReadDependencies... ${packageJson}`)
  }

  getDependencies(){
    // eslint-disable-next-line no-console
    console.log(`running... ${JSON.stringify(packageJson.dependencies)}`)
    // eslint-disable-next-line no-console
    const children = Object.keys(packageJson.devDependencies).map(key => {
      const color = key.includes('@vue')? {stroke:'lightblue', fill: 'orange'} : {stroke:'lightblue', fill: 'steelblue'}
      return {
        'name': `${key}: ${packageJson.devDependencies[key]}`,
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

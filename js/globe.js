const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

const renderer=new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const geometry=new THREE.SphereGeometry(2,32,32)

const material=new THREE.MeshBasicMaterial({wireframe:true})

const globe=new THREE.Mesh(geometry,material)

scene.add(globe)

camera.position.z=5

function animate(){

requestAnimationFrame(animate)

globe.rotation.y+=0.005

renderer.render(scene,camera)

}

animate()
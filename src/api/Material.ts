import { ShaderMaterial } from 'three'
import type { ColorRepresentation, ShaderMaterialParameters, Vector2 } from 'three'
import Shader from './Shader'

class Material extends ShaderMaterial {
  constructor(args?: ShaderMaterialParameters) {
    super(Material.parseArgs(args))
  }

  get time() {
    return this.uniforms.time.value
  }
  set time(v: number) {
    this.uniforms.time.value = v
  }

  get resolution() {
    return this.uniforms.resolution.value
  }
  set resolution(v: Vector2) {
    this.uniforms.resolution.value.copy(v)
  }

  get DPR() {
    return this.uniforms.DPR.value
  }
  set DPR(v: number) {
    this.uniforms.DPR.value = v
  }

  get audioFrequency() {
    return this.uniforms.audioFrequency.value
  }
  set audioFrequency(v: number) {
    this.uniforms.audioFrequency.value = v
  }

  get accentColor() {
    return this.uniforms.accentColor.value
  }
  set accentColor(v: ColorRepresentation) {
    this.uniforms.accentColor.value.set(v)
  }

  get loader() {
    return this.uniforms.loader.value
  }
  set loader(v: number) {
    this.uniforms.loader.value = v
  }

  private static parseArgs(args?: ShaderMaterialParameters): ShaderMaterialParameters | undefined {
    if (!args) return args
    args.fragmentShader = Shader.extend(args.fragmentShader)
    args.vertexShader = Shader.extend(args.vertexShader)
    args.uniforms = Shader.extendMaterialUniforms(args.uniforms)
    return args
  }
}

export default Material

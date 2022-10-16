/* eslint-disable react/no-unknown-property */

import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'
import { useAnimation } from '../hooks/useAnimation'
import shallow from 'zustand/shallow'
import { useSettingsStore } from 'src/stores/settingsStore'

type modelNameToUrl = {
  AliciaSolid: string
  Tsukuyomi: string
}
const modelNameToUrl = {
  AliciaSolid: '/models/AliciaSolid.vrm',
  Tsukuyomi: '/models/Tsukuyomi.vrm',
} as modelNameToUrl

export const VRMAvatar = () => {
  const { modelName } = useSettingsStore(
    (state) => ({
      mode: state.mode,
      modelName: state.modelName,
    }),
    shallow,
  )

  const { current: loader } = useRef(new GLTFLoader())
  const { camera } = useThree()
  const [gltf, setGltf] = useState<any>(null)
  const groupRef = useAnimation(gltf?.userData.vrm)

  useEffect(() => {
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser)
    })
    loader.load(
      modelNameToUrl[modelName as keyof modelNameToUrl],
      (gltf) => {
        gltf.userData.vrm.scene.rotation.y = Math.PI
        gltf.userData.vrm.scene.position.setY(-0.8)
        gltf.userData.vrm.lookAt.target = camera
        setGltf(gltf)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log('An error happened', error)
      },
    )
  }, [modelName])

  useEffect(() => {
    if (gltf) {
      VRMUtils.removeUnnecessaryJoints(gltf.userData.vrm.scene)
    }
  }, [gltf])

  useFrame(({ clock }, delta) => {
    if (gltf?.userData.vrm) {
      gltf.userData.vrm.scene.rotation.y =
        Math.PI * Math.sin(clock.getElapsedTime())
      gltf.userData.vrm.update(delta)
    }
  })

  return (
    <>
      {gltf ? (
        <primitive object={gltf.userData.vrm.scene} ref={groupRef} />
      ) : null}
    </>
  )
}

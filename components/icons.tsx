import { SmileOutlined, GlobalOutlined } from '@ant-design/icons'
import { DockerOutlined, KubernetesOutlined, LinuxOutlined, PythonOutlined } from '@ant-design/icons'
import Image, { ImageProps } from 'next/image'

export const Icons = {
    SmileOutlined: SmileOutlined,
    GlobalOutlined: GlobalOutlined,
    DockerOutlined: DockerOutlined,
    KubernetesOutlined: KubernetesOutlined,
    LinuxOutlined: LinuxOutlined,
    PythonOutlined: PythonOutlined,
}

export const Logos = {
    Go: (props: Omit<ImageProps, 'src' | 'alt'>) => (
        <Image
            src="/img/go-logo.png"
            alt="go-logo"
            width={32} // This will be applied if not overridden
            height={32}
            {...props}
        />
    ),
}
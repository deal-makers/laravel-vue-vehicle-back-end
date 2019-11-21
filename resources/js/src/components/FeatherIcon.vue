<script>
import * as icons from 'vue-feather-icons'

export default {
    functional:true,
    name: 'feather-icon',
    props: {
        icon: { type: String, required: true },
        svgClasses: { type: [String, Object, Array], default: "" },
        badge: {}
    },
    render(h, {props, data}) {
        // Add feather classes
        data.staticClass ? data.staticClass = data.staticClass + ' feather-icon select-none relative' : data.staticClass = 'feather-icon select-none relative'

        let svg = h(icons[props.icon], {class: props.svgClasses})
        let badgeEl = h('span', {class: 'feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center', style: 'top: -7px; right: -5px'}, [props.badge])
        let children = [svg]
        if(props.badge) children.push(badgeEl)
        return h('span', data, children)
    }
}

</script>

<style lang="scss">
@import "@sass/vuesax/components/featherIcon.scss"
</style>

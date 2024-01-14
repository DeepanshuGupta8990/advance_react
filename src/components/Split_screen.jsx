import {styled} from "styled-components"

export const SplitScreen = ({children,leftWidth=1,rightWidth=1}) => {
    const [Left,Right] = children;
    return(
        <Container>
            <Panel flex={leftWidth}>
              {Left}
            </Panel>

            <Panel flex={rightWidth}>
              {Right}
            </Panel>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Panel = styled.div`
    flex: ${(p) => p.flex};
`
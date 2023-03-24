const Editor = () => {
  return (
    function PlacementExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [placement, setPlacement] = React.useState('right')
      
        return (
          <>
            <Button colorScheme='blue' onClick={onOpen}>
             Editar
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }
  )
}

export default Editor
